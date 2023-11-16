var primerNumero = parseInt(prompt("Introduce el primer número:"));

var segundoNumero;
do {
    segundoNumero = parseInt(prompt("Introduce el segundo número (debe ser mayor o igual al primer número):"));
} while (segundoNumero < primerNumero);

console.log(`Los múltiplos de 2 entre ${primerNumero} y ${segundoNumero} son:`);
for (let i = primerNumero; i <= segundoNumero; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
