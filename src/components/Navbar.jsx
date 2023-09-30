import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function AppNavbar() {
  return (
    <Navbar className='nv-Navbar' expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img className='nv-Image' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Coca-Cola_logo_white.png/640px-Coca-Cola_logo_white.png" alt="Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle className='icon' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nv-il ml-auto">
          <Link to="/" className="nav-link"><h5 className='h5-Navbar'>Inicio</h5></Link>
          <Link to="/login" className="nav-link"><h5 className='h5-Navbar'>Iniciar sesión</h5></Link>
          <Link to="/register" className="nav-link"><h5 className='h5-Navbar'>Registrarse</h5></Link>
          <Link to="/productos" className="nav-link"><h5 className='h5-Navbar'>Productos</h5></Link>
          <Link to="/CompraP" className="nav-link"><h5 className='h5-Navbar'>Comprar productos</h5></Link>
          <Link to="/contactos" className="nav-link"><h5 className='h5-Navbar'>Contactos</h5></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar








