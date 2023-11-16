var nAsteriscos = parseInt(prompt("Introduce un entero positivo: "));

while (isNaN(nAsteriscos) || nAsteriscos < 0) {
  alert("ERROR: Entrada no válida.");

  var nAsteriscos = parseInt(prompt("Introduce un entero positivo: "));
}

var t1 = "";

for (let i = 1; i <= nAsteriscos; i++) {
  t1 += "* ".repeat(i) + "<br>";
}

var t2 = "";

for (let i = nAsteriscos; i >= 1; i--) {
  t2 += "* ".repeat(i) + "<br>";
}

var t3 = "";

for (let i = 1; i <= nAsteriscos; i++) {
  t3 += "&nbsp".repeat(nAsteriscos - i) + "* ".repeat(i) + "<br>";
}

var t4 = "";

for (let i = nAsteriscos; i >= 1; i--) {
  t4 += "&nbsp".repeat(nAsteriscos - i) + "* ".repeat(i) + "<br>";
}

document.write("Triángulo 1: " + "<br>" + t1);

document.write("Triángulo 2: " + "<br>" + t2);

document.write("Triángulo 3: " + "<br>" + t3);

document.write("Triángulo 4: " + "<br>" + t4);
