var i = 0;
var numCua = parseInt(prompt("Dime el numero de cuadrados: "));


for (let index = 0; index < numCua; index++) {
	var red = Math.random() * 255 + 1;
	var blue = Math.random() * 255 + 1;
	var green = Math.random() * 255 + 1;

	document.write(`<div style="margin: 0; padding: 0; width: 50px; height: 50px; background-color: rgb(${red}, ${green}, ${blue}); position: absolute; top: ${Math.random() * 100 + 1}%; left: ${Math.random() * 100 + 1}%;"></div>`);

}
