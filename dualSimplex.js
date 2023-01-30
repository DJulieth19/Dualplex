//determinar cantidad de restricciones:
let cantidadRestricciones = [];
for (i = 0; i <= 10; i++) {
    try {
        let variable = document.getElementById("Restriccion" + i).value;
        cantidadRestricciones.push(variable);
    } catch (error) { }
}
//determinar cantidad de variables (función contar cantidad de soluciones)
let resultadoObjetivo = document.getElementById("ResultObjetivo").value;
let conjuntoSoluciones = 19;
let Soluciones = [];
for (i = 0; i < cantidadRestricciones.length; i++) {
    let variable = document.getElementById("R" + conjuntoSoluciones).value;
    conjuntoSoluciones = conjuntoSoluciones + 10;
    Soluciones.push(variable);
}
Soluciones.push(resultadoObjetivo);

var matriz = [];
function generarMatriz(){
    var referencia=10;
    //Agregar restricciones
    for (j = 0; j < cantidadRestricciones.length; j++) {
        var Restriccionx = [];
        for (i = referencia; i <= (referencia + 8); i++) {
            try {
                let variable = document.getElementById("R" + i).value;
                
                Restriccionx.push(variable);
            } catch (error) { }
        }
        matriz[j] = Restriccionx;
        referencia = referencia+10;
    }
    //generar matriz identidad 
    matrizIdentidad = [];
    for (i=0; i<cantidadRestricciones.length; i++){
        let arreglo = [];
        for (j=0; j<Soluciones.length-1;j++){
            arreglo[j] ="0";
        }
        matrizIdentidad [i] = arreglo;
    }
    for (i=0; i<cantidadRestricciones.length; i++){
        matrizIdentidad[i][i] = "1";
    }
    //Uniendo Matriz con Matriz identidad
    for(j=0; j<cantidadRestricciones.length; j++){
        for (i=0; i<matrizIdentidad.length; i++){
            matriz[j].push(matrizIdentidad[j][i]);
        }
    }
   //Creando funcion objetivo
   let funcionObjetivo = [];
    for (i = 1; i <= 10; i++) {
        try {
            let variable = document.getElementById("Objetivo" + i).value;
            funcionObjetivo.push(variable);
        } catch (error) {}
    }
    //añadiendo variables de holgura a funcion objetivo
    for (k = 1; k <= cantidadRestricciones.length; k++) {
        let variable = '0';
        funcionObjetivo.push(variable);
    }
    matriz[cantidadRestricciones.length] = funcionObjetivo; 
}

generarMatriz();
console.log(Soluciones);
console.log(matriz);












