const valores = window.location.search;
const urlParams = new URLSearchParams(valores);

//Acceder a los valores
var cantidadRestricciones = urlParams.get('CantidadRestricciones');
var cantidadVariables = urlParams.get('CantidadVariables');
console.log(cantidadVariables);
console.log(cantidadRestricciones);

//Construir matriz n * m
function genera_tabla() {
  const newElement = document.createElement("div");
  const seleccionar = document.createElement("select");
  document.querySelector(".container2").appendChild(seleccionar);
    document.querySelector(".container2").appendChild(newElement);
  }
 


