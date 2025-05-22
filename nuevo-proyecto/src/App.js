import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './Frontend/Vista/Login'; // Asegúrate de que la ruta sea correcta
import Register from './Frontend/Vista/Register'; // Asegúrate de que la ruta sea correcta
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/login" className="App-link">Iniciar Sesión</Link>
            <Link to="/register" className="App-link">Registrarse</Link>
          </nav>

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Navigate replace to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
