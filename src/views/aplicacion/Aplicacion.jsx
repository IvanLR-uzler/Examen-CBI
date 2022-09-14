import React from "react";
import Menu from "../../components/Menu";
import Nav from "react-bootstrap/Nav";

const Aplicacion = () => {
  return (
    <div>
      <Menu />
      <div>
        <div>
          <h1>Pregunta 8</h1>
        </div>
        <div>
          <Nav defaultActiveKey="/home" as="ul" >
            <Nav.Item as="li">
              <Nav.Link href="/home" disabled> Dias de la semana</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1" disabled> Buscar Oaxaca</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Dias de la semana</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Dias de la semana</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Dias de la semana</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Ver Pokemones</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Solicitar pokemones</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Editar</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2" disabled> Eliminar</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Aplicacion;
