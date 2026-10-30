import React, { useState } from "react";
import banner from "./banner.jpg"; // Asegúrate de que la ruta sea correcta
import "./App.css";


function SeccionPrincipal() {

  // Usamos el estado para controlar si mostramos un mensaje secreto o descuento

  const [mostrarMensaje, setMostrarMensaje] = useState(false);


  return (

    <main className="seccion-principal">

      {/* Adapta este título e imagen a tu temática */}

      <h1>Bienvenidos a la mejor calidad de ropa de lujo</h1>

      <p>Ofrecemos la mejor experiencia para nuestros clientes.</p>


      <img 

        src={banner}

        alt="Imagen representativa de tu temática" 

        className="imagen-destacada" width="1200px" height="auto"

      />


      <br />

      <button className="boton-accion" onClick={() => setMostrarMensaje(!mostrarMensaje)}>

        {mostrarMensaje ? "Ocultar sorpresa" : "Descubrir sorpresa"}

      </button>


      {/* El mensaje solo aparece si el estado es verdadero */}

      {mostrarMensaje && (

        <p className="mensaje-sorpresa">¡Felicidades! Tienes un 20% de descuento en tu primera compra.</p>

      )}

    </main>

  );

}


export default SeccionPrincipal;