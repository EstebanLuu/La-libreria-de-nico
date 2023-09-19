import React from 'react';
import './Index.scss';

const Index = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <img src='/logo.png' alt='Logo' />
            <h2>Nombre de la Empresa</h2>
          </div>
          <div className='footer-links'>
            <ul>
              <li>
                <a href='/'>Inicio</a>
              </li>
              <li>
                <a href='/productos'>Productos</a>
              </li>
              <li>
                <a href='/servicios'>Servicios</a>
              </li>
              <li>
                <a href='/contacto'>Contacto</a>
              </li>
            </ul>
          </div>
          <div className='footer-social'>
            <h3>Síguenos en redes sociales</h3>
            <ul>
              <li>
                <a href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
              <li>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Index;
