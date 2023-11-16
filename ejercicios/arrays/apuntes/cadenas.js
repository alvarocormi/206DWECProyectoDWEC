//CREAR UN OBJETO
var cadena = new String("Esto es una cadena");
var cadena2 = "otra cadena";
//PROPIEDAD
document.write(typeof cadena.length); //Una propiedad no lleva parametro , un metodo si lo lleva

//METODOS
cadena.charAt(2); //Devuelve la letra dada con la posicion indicada
cadena[5]; //Devuelve la letra que esta en la posicion 5
cadena.charCodeAt(1); //Te devuelve el codigo ASCII del caracter que estamos seleccionando
cadena.toLowerCase(); //Transforma una cadena a minusculas
cadena.toUpperCase(); //Transforma una cadena a mayusuclas
cadena.indexOf("una", 5); //Busca texto dentro de una cadena y te devuelve la posicion donde se encuentra
cadena.includes("una"); //Devuelve un boooleano si la cadena contiene ese texto
cadena.lastIndexOf("cadena"); //Lo mismo que indexOf pero al reves
cadena.startsWith("Est", 5); //Devuelve un booleano si la cadena empieza por esos caracteres
cadena.endsWith(); //Lo mismo que starts width pero al reves
cadena.replace(); //Devuelve una cadena con los caracteres modificados , NO REMPLAZA LA CADENA ORIGINAL
cadena.trim(); //Elimina los espacios que al principio de una cadena
cadena.slice(4); //Extrae la cadena a partir de la posicion indicada
cadena.substring(); //Lo mismo que el slice pero con pequeñas diferencias (ALBERTO RECOMIENDA USAR SLICE, EN SUBSTRING NO PUEDES USAR NEGATIVOS)
cadena.split(","); // Divide la cadena en un array basandose en un delimitador, por ejemplo , (en este caso separaria por comas)
cadena.localeCompare(cadena2); //Sirve para comparar dos cadenas (Devuelve 1, 0 , - 1) dependiente de si es mayor igual o menor

