import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Frontend/Vista/Login.jsx'; // Asegúrate de que la ruta sea correcta
import Register from './Frontend/Vista/Register'; // Asegúrate de que la ruta sea correcta
import logo from './logo.svg'; // Asegúrate de que el archivo logo.svg esté en el directorio src
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
            <Route path="/" element={
              <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </>
            } />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
