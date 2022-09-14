import React from "react";
import Menu from "../../components/Menu";


const Pregunta7 = () => {

  const buscarPlabra = ['123','Oaxaca','exit', 'rick']
  // const buscarPlabra = ['123','exit', 'rick','Oaxaca']
  // const buscarPlabra = ['123','exit', 'rick', 'undeffinite','Oaxaca']
  let find = buscarPlabra.find(i => i ==='Oaxaca');
  let pocision = buscarPlabra.indexOf(find); 
if (find === 'Oaxaca') {
  console.log('Si existe Oaxaca y se encuentra en ', pocision)
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

export default Pregunta7;
