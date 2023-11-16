/*1. Crea una función que muestre números de la serie de Fibonacci. La función recibirá como parámetro el
número de elementos de la serie que queremos que muestre. Este dato se lo solicitaremos al usuario. Debes
crear dos funciones para resolver este problema, una recursiva y otra iterativa.

Autor: Alvaro Cordero Miñambres
*/

// Función recursiva para calcular la serie de Fibonacci
function fibonacciRecursivo(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  }
  return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
}

alert(fibonacciRecursivo(n));

var num1 = 0;
var num2 = 0;
var num3 = 0;

// Función iterativa para calcular la serie de Fibonacci
function fibonacciIterativo(n) {
  for (let i = 0; i < n; i++) {
    num3 = num1+num2;
    num1 += num2;
    num2 += num1;
    
  }
  return(num3)
}


// Solicitar al usuario el número de elementos que desea mostrar
const n = parseInt(prompt("Introduce el número de elementos de la serie de Fibonacci que deseas mostrar:"));

// Mostrar la serie de Fibonacci utilizando la función recursiva
const fibRecursivo = fibonacciRecursivo(n);
console.log("Serie de Fibonacci (Recursiva):", fibRecursivo);

// Mostrar la serie de Fibonacci utilizando la función iterativa
const fibIterativo = fibonacciIterativo(n);
console.log("Serie de Fibonacci (Iterativa):", fibIterativo);
