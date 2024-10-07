/* let numeroActual =' ';

function ingresarNumero(){
    numeroActual += numero;
}
function dividir(){

}
function multiplicar(){

}
function restar(){

}

function sumar(){

}

function limpiar(){

}
function mostrarResultado(){

} */
let display = document.getElementById("cero");
let operacionActual = "";
let numeroActual = "";
let operacionAnterior = "";
let resultadoMostrado = false;

// Función para ingresar números
function ingresarNumero(numero) {
  if (resultadoMostrado) {
    numeroActual = ""; // Resetear el número si se acaba de mostrar un resultado
    resultadoMostrado = false;
  }
  numeroActual += numero;
  display.innerText = numeroActual;
}

// Función para limpiar el display
function limpiar() {
  operacionActual = "";
  numeroActual = "";
  operacionAnterior = "";
  resultadoMostrado = false;
  display.innerText = "0";
}

// Función para realizar la suma
function sumar() {
  establecerOperacion("+");
}

// Función para realizar la resta
function resta() {
  establecerOperacion("-");
}

// Función para realizar la multiplicación
function multiplicar() {
  establecerOperacion("*");
}

// Función para realizar la división
function dividir() {
  establecerOperacion("/");
}

// Función para mostrar el resultado
function mostrarResultado() {
  if (operacionActual && numeroActual) {
    let numero1 = parseInt(operacionAnterior);
    let numero2 = parseInt(numeroActual);
    let resultado = 0;

    switch (operacionActual) {
      case "+":
        resultado = numero1 + numero2;
        break;
      case "-":
        resultado = numero1 - numero2;
        break;
      case "*":
        resultado = numero1 * numero2;
        break;
      case "/":
        if (numero2 === 0) {
          alert("Error: No se puede dividir por cero");
          limpiar();
          return;
        } else {
          resultado = numero1 / numero2;
        }
        break;
    }

    display.innerText = resultado;
    operacionAnterior = resultado;
    numeroActual = "";
    operacionActual = "";
    resultadoMostrado = true;
  }
}

// Función para establecer la operación
function establecerOperacion(operador) {
  if (numeroActual) {
    if (operacionActual) {
      mostrarResultado();
    }
    operacionAnterior = numeroActual;
    numeroActual = "";
    operacionActual = operador;
    display.innerText = operador;
  }
}
