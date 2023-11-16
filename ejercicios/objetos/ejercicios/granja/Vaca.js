import { Animal } from './Animal.js';

export class Vaca extends Animal {
    constructor(nombre, enfermo) {
        super(nombre, 4, enfermo);
        this.litrosLeche = 1;
    }

    comer(kgForraje) {
        //FORMA 1
        while (!this.enfermo && kgForraje > 0) {
            this.litrosLeche += 0.5;

            if (this.litrosLeche == 18.5) {
                alert("La vaca " + this.toString() + " tiene que ser ordeñada");
            }

            if (this.litrosLeche > 28) {
                this.enfermo = true;
                alert("La vaca " + this.toString() + " a enfermado");
            }

            kgForraje--

        }

    }

    ordeñar() {
        if (!this.enfermo) {
            alert("La vaca " + this.nombre + " con número de identificación " + this.numeroIdentificacion + " a sido ordeñada y se han obtenido " + this.litrosLeche + " L.");
            this.litrosLeche = 1;
        } else {
            console.log("ERROR: La vaca no se puede ordeñar porque esta enferma.");
        }
    }

    curar() {
        if (super.curar()) {
            this.litrosLeche = 1;
        } else {
            console.log("ERROR: La vaca NO esta enferma.");
        }
    }
}