import React from "react";
import Nav from "react-bootstrap/Nav";

const Menu = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/pregunta6">Pregunta 6</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/pregunta7">Pregunta 7</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aplicacion">Aplicacion</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Menu;
