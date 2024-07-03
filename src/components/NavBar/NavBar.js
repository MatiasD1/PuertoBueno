import React, { useState } from 'react';

const NavBar = ({ isVisible }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={`NavBar ${isVisible ? 'fixed' : ''}`}>
      <h2 className="tituloNavBar">Puerto Bueno</h2>
      <h3 className="subtituloNavBar">- Mar del Plata -</h3>

      {/* Menú hamburguesa visible en pantallas pequeñas */}
      <div className="menu-hamburguesa" onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>

      {/* Menú principal */}
      <ul className={`nav justify-content-end ${showMenu ? 'show' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/departamentos" className="nav-link">Departamentos</a>
        </li>
        <li className="nav-item">
          <a href="/servicios" className="nav-link">Servicios</a>
        </li>
        <li className="nav-item">
          <a href="/ubicacion" className="nav-link">Ubicación</a>
        </li>
        <li className="nav-item">
          <a href="/contacto" className="nav-link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;