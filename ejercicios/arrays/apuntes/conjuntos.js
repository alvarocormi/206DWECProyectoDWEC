//CREAR UN CONJUNTO VACIO 
//Un conjunto elimina automaticamente los duplicadas
var conjunto = new Set();

//Almacenar datos dentro de un conjunto
conjunto.add(8);
conjunto.add(5).add(3).add(1); //Se pueden encadenar metodos
console.log(conjunto);

//Convertir un array a un conjunto
var conjuntoDeArrays = new Set([1,2,3,4,5,76,8,56,1,2,4,45]); //Elimina automaticamente los duplicados del array

//Convertir un conjunto a un array 
var conjuntoToArray =[...conjunto];

//Propiedades y metodos
conjuntoDeArrays.size //Devuelve el numero de elementos que tiene el conjunto.
conjuntoDeArrays.delete(2) //Le pasas como parametro el valor que quieres eliminar (NO PASAR EL INDICE , PASAR EL VALOR).
conjuntoDeArrays.clear() //Deja el conjunto vacio
conjuntoDeArrays.has(4) //Busca el valor dentro de un conjunto -> Boolean


//Recorrer un conjunto mediante un for of
for (const iterator of conjunto) {
	console.log(iterator);
}