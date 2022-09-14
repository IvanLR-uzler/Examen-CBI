import React from "react";
import Pregunta6 from "../views/preguntas/Pregunta6";
import Pregunta7 from "../views/preguntas/Pregunta7";
import Aplicacion from "../views/aplicacion/Aplicacion";
import Principal from "../views/Principal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Router>
        <div>
            <Routes>
              <Route path="/" element={<Principal />}></Route>
              <Route path="/pregunta6" element={<Pregunta6 />}></Route>
              <Route path="/pregunta7" element={<Pregunta7 />}></Route>
              <Route path="/aplicacion" element={<Aplicacion />}></Route>
            </Routes>
        </div>
      </Router>
    </>
  );
}
