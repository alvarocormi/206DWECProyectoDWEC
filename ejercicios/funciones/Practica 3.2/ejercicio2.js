// 2. Crea una función que reciba un array de palabras. 
//   La función devolverá un mapa que contenga como clave cada palabra y el valor es el número de veces que esa palabra aparece en el array. 
//   Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío y mostraremos las repeticiones de las palabras. 

  var arrayPalabras = [];
  while (true) {
    const palabra = prompt("Introduzca una palabra:");

    if (palabra === null || palabra.trim() === "") {
      break; // Salir del bucle si el usuario presiona "Cancelar" o deja la entrada vacía
    }
    const palabraMinusculas = palabra.toLowerCase(); // Pasamos la palabra a minúsculas
    arrayPalabras.push(palabraMinusculas);
  }

  // Función para contar repeticiones de palabras
  function contarRepeticionesDePalabras(arrayPalabras) {
    const mapaPalabras = new Map();

    for (let i = 0; i < arrayPalabras.length; i++) {
      if (mapaPalabras.has(arrayPalabras[i])) {
        mapaPalabras.set(arrayPalabras[i], mapaPalabras.get(arrayPalabras[i]) + 1);
      } else {
        mapaPalabras.set(arrayPalabras[i], 1);
      }
    }

    if (mapaPalabras.size > 0) {
      mapaPalabras.forEach((repeticiones, palabra) => {
        document.write("La palabra " + palabra + " se ha repetido: " + repeticiones + " veces.<br>");
      });
    } else {
      document.write("Array vacío.");
    }
  }

  contarRepeticionesDePalabras(arrayPalabras); //Llamamos a la función para mostrar los resultados.