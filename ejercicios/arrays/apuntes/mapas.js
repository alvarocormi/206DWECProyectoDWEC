//CREAR UN MAPA VACIO
var mapa = new Map();

//Añadir datos a un mapa (Clave, Valor) (Las calves no se pueden repetir los valores si)
mapa.set(1,"Antonio");
mapa.set(2,"Pepe").set(3,"Jaime").set(4,"Alberto");

//Crear un mapa pasandole un array
var mapaArray = new Map(
	[
		[1,"Pedro"],
		[2,"Pepe"],
		[3,"Luis"],
		[4,"Carlos"]

	]
)

//Propiedades y metodos
mapa.get(1); //Parametro -> Clave:  devuelve el valor de la misma
mapa.has(5); //Parametro -> Clave: busca si existe o no
mapa.delete(1); //Parametro -> Clave: elimina un elemento

//Recorrer mapas 
//Clave, valor
for (const [clave, valor] of mapa) {
	console.log("Clave: "+clave+" Valor: "+valor);
}

//Keys(Recorre solo las claves)
for (const clave of mapa.keys()) {
	console.log(clave);
}

//Values(Recorre solo los valores)
for (const valores of mapa.values()) {
	console.log(valores);
}