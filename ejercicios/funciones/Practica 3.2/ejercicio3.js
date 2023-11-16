// 3.Crear una función para comprobar hasta que punto la función Math.random() es realmente aleatoria. La
// función recibirá un parámetro que por defecto será 10000. Ese, será el número de veces que generaremos
// números aleatorios del 1 al 10. Aunque el ejercicio se puede resolver con arrays, utiliza un mapa donde
// las claves serán los números del 1 al 10 y los valores, el número de veces que aparece

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