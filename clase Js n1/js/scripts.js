//Esto es un comentario en linea

/*
esto es un comentario
en un bloque de JS
*/

//* Para marcar algo importante
//! para marcar algo urgente/muy importante
//? para marcar dudas/consultas sobre el codigo
//TODO: para marcar acciones a realizar a futuro

//*Declaracion de variables
/*let ciudad = "Mar del Plata"
var nombre = "Sebastian"
const edad = 35
//nombre="Sebita"*/

//*tipos de variables
//datos enteros: edad = 35, anio_actual = 2023
//datos float (datos con decimales): pi=3.14 , altura= 1.70, peso =63.500
//datos booleanos: true, false
//datos string: saludo = "Hola! Bienvenido a la clase 1 de Js." dni ="123123123"

//var nombre = prompt("Ingrese su nombre")
//alert("Hola "+nombre)
//document.write("<h1>Hola "+nombre+"</h1>");
//document.write(`<h1>Tu edad es ${edad} </h1>`)
//document.write('<input type="text" name="" id="">');

//* Operaciones matematicas en JavaScript
/*
var nombre = prompt("Diganos su nombre: ")
var anio_nacimiento = prompt("Diganos su año de nacimiento: ")

var edad = 2023 - anio_nacimiento

alert(`Hola ${nombre}, tu edad es de ${edad}`)*/

//vamos a pedirle al usuario 2 numeros y los vamos a sumar

/*
var numero1 = prompt("Indiqueme el primer numero a sumar: ")
var numero2 = prompt("Indiqueme el segundo numero a sumar: ")

var resultado = numero1 + numero2

document.write(`<h1>La suma de ${numero1} y ${numero2} es ${resultado}</h1>`)*/

//pidamos un dato por consola y veamos el tipo de dato
//var prueba = prompt("Ingrese un dato para ver su tipo: ")
/*
console.log(typeof(prueba));
var variable1 = 5
var variable2= 15
var resultado = variable1+variable2

document.write("<h1>El resultado de la suma es "+resultado+"</h1>")

*/

//Conversion de datos:
parseInt() //trasformar un string a un numero entero
parseFloat() // transformar un string a un numero decimal

//vamos a pedirle al usuario 2 numeros y los vamos a sumar

//var numero1 = prompt("Indiqueme el primer numero a sumar: ")
//var numero2 = prompt("Indiqueme el segundo numero a sumar: ")

//var resultado = parseInt(numero1) + parseInt(numero2)

//document.write(`<h1>La suma de ${numero1} y ${numero2} es ${resultado}</h1>`)

//*Suma
console.log("Hola"+"mundo"); //2 strings se concatenan
console.log("15"+10.5); //1 string y un entero/decimal se concatenan
//*resta
console.log("15"-15); //con las restas, se puede utilizar un string y un numero
console.log("HOLA"-"12"); //se puede usar restas entre strings CON VALORES NUMERICOS
//*multiplicacion
console.log("15"*3); // se puede multiplicar entre string y numeros
console.log("15"*"3"); // se puede multiplicar entre string CON VALORES NUMERICOS
//*Division
console.log("15"/3); // se puede dividir entre string y numeros
console.log("15"/"3"); // se puede dividir entre string CON VALORES NUMERICOS
//*Exponente (potencia)
console.log(2**"5"); //se puede utilizar potencias con base o exponente string / y viceversa
console.log("2"**"5");
//*Modulo (resto de una division)
console.log(10%3); // resto de una division: lo que sobra luego de hacer una division entera

//! Operadores logicos: me devuelven un resultado VERDADERO O FALSO (true or false)

/* 
//*
> : Mayor
< : Menor
>= : mayor igual
<= : menor igual
== : igualdad en valor 
!= : diferente a
=== : igualdad en tipo y valor

*/

//* Ejemplos:

console.log(10>5);
console.log(10 <= 12);
console.log(10 >= 10);
console.log(10 >= "10");
console.log("12" < "13");
console.log("SI" == "si");
console.log(10 == "10");

//datos curiosos
console.log(1 == true); // 1 y true para Js significan verdadero en su VALOR
console.log(0 == false); // 0 y false para Js significa false
console.log(0 == ""); // 0 y un string vacio, son el mismo valor para JavaScript
console.log("Hola"*5); //NaN significa que el resultado que obtuve "No es un numero" (Not A Number)
console.log(typeof(NaN));

//operador de igualdad y tipo

console.log(10 === "10"); //En este caso compara VALOR Y TIPO DE DATO
console.log(10 === 10.0); 







