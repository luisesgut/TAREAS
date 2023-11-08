import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [joke, setJoke] = useState("");

  // Función para obtener un nuevo chiste
  const generarNuevaFrase = () => {
    setIsLoading(true); // establece el loading
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        "Accept": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setJoke(data.joke); // guarda el chiste en el estado
        setIsLoading(false); // quita el isLoading
      })
      .catch((error) => {
        alert("Error al cargar el chiste:", error);
      });
  };

  // Ejecutar el efecto inicial solo una vez
  useEffect(() => {
    generarNuevaFrase();
  }, []);

  return (
    <div className="card">
      <button onClick={generarNuevaFrase}>GENERAR NUEVA FRASE</button>
      {isLoading ? <h1>Cargando...</h1> : <p>{joke}</p>}
    </div>
  );
}

export default App;
