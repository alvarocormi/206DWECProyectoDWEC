var juegos = 0;

var marcador = "";

do {
  var numeroAleatorio = Math.floor(Math.random() * 100 + 1);

  var juegoTerminado = false;

  var juegoGanado = false;

  var intentos = 0;

  for (let i = 0; i < 5; i++) {
    var n = prompt("Introduce un entero positivo: ");

    while (isNaN(n) || n < 0 || n > 100) {
      alert("ERROR: Entrada no válida.");

      n = prompt("Introduce un entero positivo: ");
    }

    Math.floor(n);

    intentos++;

    if (n != null) {
      if (numeroAleatorio == n) {
        alert("Has acertado.");

        juegoTerminado = true;

        juegoGanado = true;

        i = 6;
      } else if (numeroAleatorio > n && i <= 5) {
        alert("El número introducido es menor, prueba uno más grande.");
      } else {
        alert("El número introducido es mayor, prueba uno más pequeño.");
      }
    } else {
      n = numeroAleatorio;

      i = 6;
    }
  }

  if (numeroAleatorio != n) {
    juegoTerminado = true;

    alert("Has perdido, el número era " + numeroAleatorio + " .");
  }

  var jg = "";

  if (juegoGanado) {
    jg = "SI";
  } else {
    jg = "NO";
  }

  var jt = "";

  if (juegoTerminado) {
    jt = "SI";
  } else {
    jt = "NO";
  }

  juegos++;

  marcador +=
    juegos +
    ". Juego terminado: " +
    jt +
    " Número de intentos: " +
    intentos +
    " Número acertado: " +
    jg +
    "\n";

  var fin = confirm("Quieres seguir jugando?");
} while (fin == true);

alert(marcador);
