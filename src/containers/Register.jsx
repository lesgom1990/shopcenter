import React from 'react';
import Header from '../components//Header.jsx';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.css';

const Register = () => {
  return (
    <>
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit="">
            <input
              name="name"
              className="input_parameters_register"
              type="text"
              placeholder="Nombre"
              onChange=""
            />
            <input
              name="email"
              className="input_parameters_register"
              type="text"
              placeholder="Correo"
              onChange=""
            />
            <input
              name="password"
              className="input_parameters_register"
              type="password"
              placeholder="Contraseña"
              onChange=""
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
      </Link>
        </section>
      </section>
    </>
  );
}

export default Register;