// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	let lienzoCreado = false;
	//Selección de algunos de los elementos del DOM que necesitaremos
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 
	let peticionRealizada = false;
	botonCrearLienzo.addEventListener("click", crearLienzo);
	activarPaleta();
	botonBorrar.addEventListener("click", borrarDibujo);

	function obtenerElementoAleatorio(array) {
		return array[Math.floor(Math.random() * array.length)];
	}

	function crearLienzo(e) {
		e.preventDefault();

		if (!lienzoCreado) { 
			zonaDibujo.classList.add("tablerodibujo");

			for (let i = 0; i < tamLienzo.value; i++) {
				let fila = document.createElement("tr");
				fila.classList.add("fila");

				for (let j = 0; j < tamLienzo.value; j++) {
					let celda = document.createElement("td");
					celda.classList.add("celda");
					fila.appendChild(celda);
				}

				zonaDibujo.appendChild(fila);
			}

			zonaDibujo.removeEventListener("click", activarPincel); 
			zonaDibujo.addEventListener("click", activarPincel);

			lienzoCreado = true; 
		}
	}



	function activarPaleta() {
		let colores = paleta.children;
		for (const color of colores) {
			color.addEventListener("click", (e) => {
				paleta.querySelector(".seleccionado").classList.remove("seleccionado");
				e.target.classList.add("seleccionado");
			});
		}

	}

	function activarPincel(e) {
		pincelActivo = !pincelActivo; 

		const mensaje = pincelActivo ? "PINCEL ACTIVADO" : "PINCEL DESACTIVADO";
		pincel.textContent = mensaje;

		for (const fila of zonaDibujo.querySelectorAll(".fila .celda")) {
			if (pincelActivo) {
				fila.addEventListener("mouseover", pintar);
			} else {
				fila.removeEventListener("mouseover", pintar);
			}
		}
	}


	function pintar(e) {
		let color = document.querySelector(".seleccionado");
		if (pincelActivo) {
			if (e.target.classList.length > 1) {
				e.target.classList.remove(e.target.classList[1]);
			}
			e.target.classList.add(color.classList[0]);
		}
	}


	function borrarDibujo(e) {
		e.preventDefault();
		for (const fila of zonaDibujo.children) {
			for (const celda of fila.children) {
				celda.classList.add("color6");
			}
		}
	}

	botonDescargar.addEventListener("click", function () {
		if (!peticionRealizada) { 
			fetch('http://127.0.0.1:5500/temasDibujo.json')
				.then(response => response.json())
				.then(data => {
					const select = document.getElementById('temas');
					data.TEMAS.forEach(temas => {
						const primerElemento = temas[0]; 
						const option = document.createElement('option');
						option.text = primerElemento;
						option.value = primerElemento;
						select.appendChild(option);
					});
					peticionRealizada = true;
				})
				.catch(error => console.error('Hubo un problema con la petición Fetch:', error));
		}
	});


	botonQueDibujo.addEventListener('click', function () {
		const temaSeleccionado = selector.value;
		const temaIndex = selector.selectedIndex;
		if (temaSeleccionado !== "selecciona") {
			const opcionesTema = selector.options[temaIndex].parentNode.childNodes;
			const temas = [];
			opcionesTema.forEach(option => {
				if (option.value !== "selecciona") {
					temas.push(option.value);
				}
			});

	
			fetch('http://127.0.0.1:5500/temasDibujo.json')
				.then(response => response.json())
				.then(data => {
					const temaIndex = data.TEMAS.findIndex(t => t.includes(temaSeleccionado));
					if (temaIndex !== -1) {
						const tema = data.TEMAS[temaIndex];
						const elementosTema = tema.slice(1); 
						const dibujoAleatorio = obtenerElementoAleatorio(elementosTema);


						dibAle.textContent = dibujoAleatorio;
					} else {
						alert(`El tema "${temaSeleccionado}" no se encontró.`);
					}
				})
				.catch(error => console.error('Hubo un problema con la petición Fetch:', error));
		} else {
			alert('Por favor, selecciona un tema antes de dibujar.');
		}
	});

}