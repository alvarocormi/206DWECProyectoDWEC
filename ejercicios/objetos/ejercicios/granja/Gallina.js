import {Animal} from './Animal.js';
export class Gallina extends Animal{

    constructor(nombre, enfermo) {
        super(nombre, 2, enfermo);
        this.estadoHuevo = 0;
    }

    comer(kgPienso) {
        for (let i = 0; i < kgPienso; i++) { // && this.litrosLeche>28
            this.estadoHuevo += 20;
            if (this.estadoHuevo == 100) {
                this.ponerHuevo();
            }
        }
    }

    ponerHuevo() {
        if (!this.enfermo ) {
            alert("La gallina "+this.nombre+" con número de identificación "+this.numeroIdentificacion+" a puesto un huevo.");
            this.estadoHuevo = 0;
        } else {
            console.log("ERROR: La gallina no puede poner huevos porque esta enferma.");
        }
    }

    curar() {
        if (super.curar()) {
            this.estadoHuevo = 0;
        } else {
            console.log("ERROR: La gallina NO esta enferma.");
        }
    }
}