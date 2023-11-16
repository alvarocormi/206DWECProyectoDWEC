// 4.Crea una función llamada invertirMapa. La función devolverá un nuevo mapa donde las claves serán los
// valores del mapa original y los valores del nuevo mapa serán arrays que contendrán las claves donde ese
// valor se repetía. Ejemplo:

  function arrayRandom(x = 10000) {
	var numeros = [];
	var contador = 0;
	while(contador != x) {
		numeros.push(parseInt(Math.random()*10)+1);
		contador++
	}

	var mapa = new Map();
	for (const i of numeros) {
		if(!mapa.has(i)) {
			mapa.set(i, 1);
		}else {
			var valor = mapa.get(i);
			mapa.set(i, ++valor);
		}
	}
	return mapa;
  }

  console.log(arrayRandom(100));