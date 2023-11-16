//ARRAYS

//Definir array
var a = []; //Esta es la mejor forma
var b = new Array();

var array1 = [1, "Hola", true, 14.5, null, 2, 3, 4]; // Los arrays son heterogeneos 
array1[1] = "Adios" // Cambia el valor del elemento que esta en la posicion 1 en este caso "Hola" por el valor indicado, en este caso "Adios"

var ar1 = [];
let ar2 = [1, 2];

ar1 = ar2;
ar2[0] = 155; //ar1 vale 155,2

//INSTRUCCIONES
var a = [1, 2, 3, 4, 5, "Hola"];

delete a[0]; //Elimina el elemento que se encuentra en la posicion 0 en el array a (SI ELIMINAS UN ELEMENTO EL HUECO DE ESE ELEMENTO QUEDA VACIO Y LA LONGITUD DEL ARRAY NO CAMBIA);

a.lengt // nos muestra la longitud del array.

//COMO RECCORRER UN ARRAY
var notas = [5, 7, 8, 4, 10, 0, 1];
var notas2 = [2, 6, 9, 1, 0, 0, 3];


//Metodo1 (mediante un for) | (con el if controlamos que no nos imprima por pantalla los valores undefined)
for (let posicion = 0; posicion < notas.length; posicion++) {
	if (notas[index] != undefined) {
		console.log(`La nota ${posicion} es un ${notas[posicion]}`);

	}

}

//Metodo2 (mediante un for in) -> El for in recorre los indices y automaticamente salta los que esten undefined
for (const posicion in notas) {
	console.log(`La nota ${posicion} es un ${notas[posicion]}`);
}

//Metodo3 (mediante un for of) --> Unicamente recoge los valores y no las posiciones
for (const valorNotas of notas) {
	console.log(`La nota es un ${notas[valorNotas]}`);
}


//METODOS
notas.push(3); //Añade un elemento al final de un array
notas.unshift(10); //Añade un nuevo elemento al principio del array
notas.pop(); //Elimina el ultimo elemento de un array y lo guarda
notas.shift();//Elimina el primer elemento de un array y lo guarda
console.log(notas instanceof Array) //Comprueba si notas es un array
notas.concat(notas2) //Une dos arrays y crea un nuevo array (no modifica ninguno de los dos arrays)
notas.slice(2,5) //Le pasas la posicion de inicio y final de los datos que quieres que te extraega del array (en este caso del 2 al 5 sin incluir el 5)
notas.splice(1, 5)//A partir del elemento 1 me borra 5 elementos del array
notas.join("-") //Convierte un array a un strings, el parametro es lo que usaremos para determinar el delimitador
notas.indexOf('1') //Busca contenido dentro de un array y te devuelve la posicion del mismo
notas.lastIndexOf('4') //Busca el ultimo elemento dentro de un array y devuelve la posicion del mismo
notas.includes() //Sirve para saber si un elemento esta en el array o no , devuelve un booleano
notas.reverse() //Da la vuelta al array y si modifica el array
notas.sort() //Sirve para ordenar el array y modifica el array original


//como copiar un array
var a = notas.slice()//El metodo slice sin parametros devuelve el array entero

//CONVERTIR LOS VALORES DE UN ARRAY EN VARIABLES
var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
[d1,d2,d3,d4,d5]=[...dias]; //De esta manera d1->Lunes, d2->Martes, d3->Miercoles, etc..
