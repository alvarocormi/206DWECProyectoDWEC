/* 1. Crea una función que muestre números de la serie de Fibonacci. 
                           La función recibirá como parámetro el número de elementos de la serie que queremos que muestre. 
                           Este dato se lo solicitaremos al usuario. Debes crear dos funciones para resolver este problema, una recursiva y otra iterativa. 
                           */
//Entrada de datos parseada a enteros
document.addEventListener("DOMContentLoaded", function () {
  var numeroVueltas = parseInt(prompt("Introduce un entero positivo: "));

  //Declaración de variables
  var pos1 = 0;
  var pos2 = 1;
  var acumulador = 0;
  //Bucle para sumar los numeros hasta el introducido por teclado
  for (let i = 2; i <= numeroVueltas; i++) {
    acumulador = pos1 + pos2;
    pos1 = pos2;
    pos2 = acumulador;
  }
  alert("(ITERATIVA)En número de Fibonacci en la posición " + numeroVueltas + " es: " + pos2 + "");

  //Función recursiva
  function fibonacci(numeroVueltas) {
    if (numeroVueltas <= 1) {
      return numeroVueltas;
    } else {
      return fibonacci(numeroVueltas - 1) + fibonacci(numeroVueltas - 2);
    }
  }

  alert("(RECURSIVA)En número de Fibonacci en la posición " + numeroVueltas + " es: " + fibonacci(numeroVueltas));
});
