import { Animal } from './Animal.js';
import { Vaca } from './Vaca.js';
import { Gallina } from './Gallina.js';

export class Granja{

    #codigoGranja;

    constructor(codigo) {
        let codValido =/^[AEIOU]\d{10}[A-Z]/;
        if(codValido.test(codigo)) {
            this.vacas = [];
            this.gallinas = [];
            this.#codigoGranja = codigo;
        } else {
            alert("El codigo introducido es incorrecto")
        }
        
    }

    darComerVacas(kgForraje) {
        numVacas = this.vacas.length;
        numKilos = parseInt(kgForraje / numVacas);
        numKilosSobrantes = kgForraje % numVacas;

        for (let i = 0; i < this.vacas.length; i++) {
            this.vacas[i].comer(numKilos);
        }

        if (numKilosSobrantes != 0) {
            document.write("Han sobrado: " + numKilosSobrantes + " kilos");
        }
    }

    ordeñarVacas() {
        for (let i = 0; i < this.vacas.length; i++) {
            this.vacas[i].ordeñar();
        }
    }

    darComerGallinas(kgForraje) {
        numGallinas = this.gallinas.length;
        numKilos = parseInt(kgForraje / numGallinas);
        numKilosSobrantes = kgForraje % numGallinas;

        for (let i = 0; i < this.gallinas.length; i++) {
            this.gallinas[i].comer(numKilos);
        }

        if (numKilosSobrantes != 0) {
            document.write("Han sobrado: " + numKilosSobrantes + " kilos");
        }
    }

    comprarVacas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            var vacaNueva = new Vaca(prompt("Introduce nombre de la vaca: "));
            do {
                var repetida = false;

                for (const vaca of this.vacas) {
                    if (vaca.numeroIdentificacion == vacaNueva.numeroIdentificacion) {
                        repetida = true;
                    }
                }
                if (repetida) {
                    vacaNueva.cambiarID();
                }

            } while (repetida);
            this.vacas.push(vacaNueva);
        }

    }

    comprarGallinas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            var gallinaNueva = new Gallina(prompt("Introduce nombre de la vaca: "));
            do {
                var repetida = false;

                for (const gallina of this.gallinas) {
                    if (gallina.numeroIdentificacion == gallinaNueva.numeroIdentificacion) {
                        repetida = true;
                    }
                }
                if (repetida) {
                    gallinaNueva.cambiarID();
                }

            } while (repetida);
            this.gallinas.push(gallinaNueva);
        }
    }

    venderVacas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.vacas.shift()
        }
    }

    venderGallinas(cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.gallinas.shift()
        }
    }

    mostrarEnfermos() {
        console.log("Vacas Enfermas: ");
        for (const vaca of this.vacas) {
            if (vaca.enfermo) {
                vaca.toString();
            }
        }

        console.log("Gallinas Enfermas: ");
        for (const gallina of this.gallinas) {
            if (gallina.enfermo) {
                gallina.toString();
            }
        }
    }


    toString() {
        console.log("El codigo de la granja es " + this.#codigoGranja + " y tiene " + this.vacas.length + " vacas y " + this.gallinas.length + " gallinas.");
    }


}