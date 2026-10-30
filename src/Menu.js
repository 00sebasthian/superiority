import React, { useState } from "react";
import { Link } from "react-router-dom";
import logos from "./logos.png";
import iconMenu from "./iconos/icon-menu.png";
import iconSearch from "./iconos/icon-search.png";
import iconHeart from "./iconos/icon-heart.png";
import iconUser from "./iconos/icon-user.png";
import iconBag from "./iconos/icon-bag.png";
import "./App.css";

function Menu() {
  // Estados para abrir/cerrar menú y buscador
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [busquedaAbierta, setBusquedaAbierta] = useState(false);

  return (
    <>
      <nav className="menu-navegacion">
        <div className="menu-izquierda">
          <button 
            type="button" 
            className="opcion-menu"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            <img src={iconMenu} alt="Menú" className="icono-png" />
            Menu
          </button>
          
          <button 
            type="button" 
            className="opcion-menu"
            onClick={() => setBusquedaAbierta(!busquedaAbierta)}
          >
            <img src={iconSearch} alt="Buscar" className="icono-png" />
            Search
          </button>
        </div>

        <Link to="/" className="menu-marca">
          <img src={logos} alt="Logo Superiority" />
          <h2>Superiority</h2>
        </Link>

        <div className="menu-derecha">
          <Link to="/favoritos" aria-label="Favoritos" className="icono-derecha">
            <img src={iconHeart} alt="Favoritos" className="icono-png" />
          </Link>
          <Link to="/perfil" aria-label="Perfil" className="icono-derecha">
            <img src={iconUser} alt="Perfil" className="icono-png" />
          </Link>
          <Link to="/carrito" aria-label="Carrito" className="icono-derecha">
            <img src={iconBag} alt="Carrito" className="icono-png" />
          </Link>
        </div>
      </nav>

      {/* Widget animado de Búsqueda */}
      <div className={`widget-busqueda ${busquedaAbierta ? "activo" : ""}`}>
        <div className="contenedor-busqueda">
          <input 
            type="text" 
            placeholder="¿Qué estás buscando?..." 
            autoFocus={busquedaAbierta}
          />
          <button 
            type="button" 
            className="boton-cerrar"
            onClick={() => setBusquedaAbierta(false)}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Menú Desplegable Lateral con Navegación de Rutas */}
      <div className={`menu-desplegable ${menuAbierto ? "activo" : ""}`}>
        <button 
          type="button" 
          className="boton-cerrar-menu"
          onClick={() => setMenuAbierto(false)}
        >
          ✕
        </button>
        <ul className="lista-menu-desplegable">
          <li>
            <Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/servicios" onClick={() => setMenuAbierto(false)}>Servicios</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link>
          </li>
        </ul>
      </div>

      {/* Fondo oscuro traslúcido para cerrar al hacer clic afuera */}
      {(menuAbierto || busquedaAbierta) && (
        <div 
          className="overlay-fondo" 
          onClick={() => {
            setMenuAbierto(false);
            setBusquedaAbierta(false);
          }}
        />
      )}
    </>
  );
}

export default Menu;