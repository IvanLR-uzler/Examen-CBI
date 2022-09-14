import React from "react";
import Menu from "../../components/Menu";

const Pregunta6 = () => {
  const fecha = new Date("10 10, 2017");
  let dia = fecha.getDay();
  switch (dia) {
    case 1:
      console.log('Lunes');
      break;
    case 2:
      console.log('Martes');
      break;
    case 3:
      console.log('Miercoles');
      break;
    case 4:
      console.log('Jueves');
      break;
    case 5:
      console.log('Viernes');
      break;
    case 6:
      console.log('Sabado');
      break;
    case 7:
      console.log('Domingo');
      break;

    default:
      break;
  }
  return (
    <div>
      <Menu />
      <div>
        <h1>Inspeccione la consola para ver el resultado</h1>
      </div>
    </div>
  );
};

export default Pregunta6;
