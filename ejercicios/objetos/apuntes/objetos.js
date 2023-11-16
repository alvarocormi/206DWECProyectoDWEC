//CREACION DE OBJETOS

//Formas de crear un objeto


o2 = new Object() 
//Utilizar esta
o={
	//Todo lo que esta dentro de las llaves el objeto son propiedades de ese mismo y las puedes usar como metodos
	nombre: "Alberto",
	apellido: "Bahillo",
	edad: 18,
	//Le puedes asignar una funcion a un objeto
	nombreCompleto: function() {
		return this.nombre+" "+this.apellido;
	}
}; 

//Formas de acceder a la propiedad de un objeto

console.log(o.nombre);
console.log(o["apellido"]);

//Forma de acceder a un metodo de un objeto
console.log(o.nombreCompleto())

//CREAR FUNCIONES CONSTRUCTURAS

function Persona(n, a) {
	this.nombre=n;
	this.apellido=a;
	this.edad = 18;
	this.nombreCompleto=function() {
		return this.nombre+" "+this.apellido;
	}
}

//Creacion de instancias
var persona1=  new Persona("Pedro","Lopez"); 

//Mediante instanceof podemos saber si una instacia pertenece a un objeto
console.log(persona1 instanceof Persona) //Le preguntamos si persona1 es una instancia de Persona y en este caso nos devolvera true

//Recorremos los ributos d eun objeto
for (const a in persona1) {
	console.log(a);
}
