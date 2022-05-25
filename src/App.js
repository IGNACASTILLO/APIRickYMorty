import { useState } from "react";
import Formulario from "./components/Formulario";
import PintarDatos from "./components/PintarDatos";
import Personaje from "./components/Personaje";
import UseState from "./components/UseState";



function App() {

    const [nombrePersonaje,setNombrePersonaje]=useState("");



  return (
    <div className="container">
      <h2>App RICK y MORTY</h2>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PintarDatos nombrePersonaje= {nombrePersonaje}/>


    </div>
  );
}

export default App;
