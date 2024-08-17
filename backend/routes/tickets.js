const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

// Buat atau buka database SQLite
const db = new sqlite3.Database('./database.sqlite'); // Menggunakan file fisik untuk database

// Buat tabel tiket jika belum ada
db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS tickets (id INTEGER PRIMARY KEY AUTOINCREMENT, number TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT)");
  db.run("INSERT OR IGNORE INTO settings (key, value) VALUES ('last_ticket', 'A000')");
});

// Middleware untuk mengelola jeda waktu
let lastRequestTime = 0;
const requestInterval = 10000; // 60 detik

router.use((req, res, next) => {
  const currentTime = Date.now();
  if (currentTime - lastRequestTime < requestInterval) {
    return res.status(429).json({ error: 'Please wait before taking another ticket.' });
  }
  lastRequestTime = currentTime;
  next();
});

// Fungsi untuk mengonversi nomor tiket
const getNextTicketNumber = (lastTicket) => {
  const prefix = lastTicket.charAt(0);
  const number = parseInt(lastTicket.slice(1)) + 1;
  return `${prefix}${number.toString().padStart(3, '0')}`;
};

// Endpoint untuk mengambil tiket baru
router.post('/take-ticket', (req, res) => {
  db.get("SELECT value FROM settings WHERE key = 'last_ticket'", (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    const lastTicket = row.value;
    const nextTicket = getNextTicketNumber(lastTicket);
    db.run("INSERT INTO tickets (number) VALUES (?)", [nextTicket], function(err) {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      db.run("UPDATE settings SET value = ? WHERE key = 'last_ticket'", [nextTicket], (err) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, number: nextTicket });
      });
    });
  });
});

module.exports = router;