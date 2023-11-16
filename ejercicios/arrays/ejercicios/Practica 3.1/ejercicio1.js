var frase = prompt("Escribe una frase:");

// Divide la frase en palabras
var palabras = frase.split(' ');

var fraseFormateada = '';

for (var i = 0; i < palabras.length; i++) {
    var palabra = palabras[i];
    // Capitaliza la primera letra de la palabra
    var primeraLetraMayuscula = palabra.charAt(0).toUpperCase();
    // Agrega el resto de la palabra en minúsculas
    var restoPalabra = palabra.slice(1).toLowerCase();
    // Concatena la palabra formateada a la frase
    fraseFormateada += primeraLetraMayuscula + restoPalabra + ' ';
}

// Muestra la frase formateada en mayúsculas
alert("Frase con la primera letra de cada palabra en mayúsculas:\n" + fraseFormateada);
