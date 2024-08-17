const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Impor rute API
const ticketsRouter = require('./routes/tickets');

// Gunakan rute API
app.use('/api', ticketsRouter);

// Mulai server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});