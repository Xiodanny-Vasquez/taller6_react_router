import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './components/inicio';
import Sobre from './components/sobre';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/inicio"> Inicio</Link> | <Link to="/sobre">Sobre </Link>
        </nav>
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;