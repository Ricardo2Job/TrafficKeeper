import React from 'react';
import '../Style/StyleRegister.css'; // Asegúrate de que este archivo CSS esté en el mismo directorio

const Register = () => {
  return (
    <div className="register-container">
      <h2>Registrarse</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="register-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
