import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";
import SeccionPrincipal from "./SeccionPrincipal";

import ServiciosPagina from "./Servicios";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="contenedor-app">
        <Menu />
        
        {/* Aquí cambian las páginas según la ruta */}
        <Routes>
          <Route path="/" element={<SeccionPrincipal />} />
          <Route path="/inicio" element={<SeccionPrincipal />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<ServiciosPagina />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;