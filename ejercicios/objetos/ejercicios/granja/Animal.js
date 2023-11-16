export class Animal {

    constructor(nombre, numeroPatas, enfermo = false) {
        this.nombre = nombre;
        this.numeroPatas = numeroPatas;
        this.numeroIdentificacion = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
        this.enfermo = enfermo;
    }

    cambiarID() { //  Cambia el número de identificación por otro generado aleatoriamente. 
        Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    }

    toString() {// Muestra el nombre del animal y su número de identificación. 
        console.log("Nombre: " + this.nombre + "id: " + this.numeroIdentificacion);
        return "Nombre: " + this.nombre + "id: " + this.numeroIdentificacion;
    }

    curar() { // Pone el valor de la propiedad enfermo a falso. Si el animal no estuviese enfermo saldría un mensaje diciendo que el animal no está enfermo. 
        if (this.enfermo) {
            this.enfermo = false;
            return true;
        } else {
            console.log("ERROR: " + this.nombre + " no esta enfermo.");
            return false;
        }
    }

}