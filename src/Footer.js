import React from "react";
import facebook from "./redes/facebook.png"; 
import instagram from "./redes/instagram.png"
import logos from "./logos.png"; // Puedes cambiarlo por tu logo corporativo
import "./App.css";
function Footer() {
  return (
    <footer className="pie-pagina-casablanca">
      <div className="footer-contenedor">
        {/* Columna 1: Logo o Símbolo */}
        <div className="footer-col footer-logo-col">
          <img src={logos} alt="Superiority Logo" className="footer-logo"  />
        </div>

        {/* Columna 2: Support */}
        <div className="footer-col">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#delivery">Entregas y Devoluciones</a></li>
            <li><a href="#account">Tu cuenta</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Company */}
        <div className="footer-col">
          <h4>Compania</h4>
          <ul>
            <li><a href="#about">Sobre Nosotros</a></li>
            <li><a href="#world"> Mundo de Superiority</a></li>
            <li><a href="#stores">Tiendas</a></li>
            <li><a href="#stockists">Distribuidores</a></li>
          </ul>
        </div>

        {/* Columna 4: Legal */}
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#accessibility">Declaracion de Accesibilidad</a></li>
            <li><a href="#terms">Terminos y Condiciones</a></li>
            <li><a href="#privacy">Politica de Privacidad</a></li>
            <li><a href="#cookie">Politica de Cookies</a></li>
            <li><a href="#use">Terminos de Uso</a></li>
          </ul>
        </div>

        {/* Columna 5: Newsletter / Members Club */}
        <div className="footer-col footer-newsletter">
          <h4>Superiority Members Club</h4>
          <p>Únete al Superiority Members Club para contenido exclusivo, eventos, promociones y más</p>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Ingresa tu dirección de correo electrónico" required />
            <button type="submit">→</button>
          </form>
          
          <small>*He leído y entiendo la Política de Privacidad de Superiority y acepto recibir el boletín informativo y otras comunicaciones de marketing.</small>
        </div>
      </div>


      {/* Barra Final: Redes Sociales, Copyright y Métodos de Pago */}
      <div className="footer-bottom-bar">
        <div className="footer-socials">
          <img src={instagram} alt="Instagram"/>
          <img src={facebook} alt="Facebook" />
        </div>

        <div className="footer-copyright">
          <p>©2026 Superiority</p>
        </div>

        <div className="footer-payments">
          <span>AMEX</span>
          <span>Apple Pay</span>
          <span>MC</span>
          <span>VISA</span>
          <span>PAYPAL</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;