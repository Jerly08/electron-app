import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import TakeTicket from './components/TakeTicket';
import './styles/styles.css'; // Impor file CSS utama

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/takeTicket" element={<TakeTicket />} />
    </Routes>
  </HashRouter>
);

ReactDOM.render(<App />, document.getElementById('root'));