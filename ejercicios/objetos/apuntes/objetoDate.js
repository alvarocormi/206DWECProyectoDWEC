//Este objet nos permite obtener una fecha
//Si solo le pasas un parametro numerico , te lo convierte a timestamp
//No tiene propiedades

var d = new Date(1); //1970-1-1 00:00:00

//Si queremos definir una fecha, como minimo hay que pasarle dos parametros
var d2 = new Date(2018,11) //2018-10-1 00:00:00
//Los meses van de 0 a 11 y los dias de la semana de 0 a 6

//Metodos
var d3 = new Date() //Si no le pasamos nada devuelve la fecha actual
d3.getDate();  //Devuleve el dia del mes (1 a 31)
d3.getDay(); //Devuelve el dia de la semana (0 a 6)
d3.getFullYear(); //Devuelve el año
d3.getHours(); //Devuelve las horas (0 a 23)
d3.getMonth(); //Devuelve el mes (0 a 11)
d3.getSeconds(); //Devuelve los segundos (0 a 59)
d3.now()// Devuelve la fecha actual , o el timestamp actual