var num1 = parseInt(prompt("Dime el primer numero: "));
var num2 = parseInt(prompt("Dime el segundo numero: "));

//random*(mayor-menor)+n
var dif = (num2-num1)+1;

for (let index = 0; index <=10; index++) {
	console.log(parseInt(Math.random()*dif+num1));
}

