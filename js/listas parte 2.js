//? metodos en JS - Parte 2

//*toString(): transforma un array en un string. Nos devuelve un string que podremos almacenar

let array_nombres = ["Seba","Marcos","Ariel","Sofia","Susana"]
let string_de_nombres = array_nombres.toString()
console.log(typeof string_de_nombres);

//*.includes(): nos dice si incluye o no un elemento que le estemos pasando como evaluacion: nos devuelve un booleano

let array_de_nombres = ["Seba","Marcos","Ariel","Sofia","Susana"]
console.log(array_de_nombres.includes("Marcos",2)) //! NO TOMA INDICES NEGATIVOS, como si ocurre con otros metodos

//*concat(): une arrays para transformarlo en un NUEVO ARRAY con los datos

let mamiferos = ["Leon","Elefante"]
let aves = ["Gaviota","Halcon"]
let reptiles = ["Serpiente","Iguana"]

let animales = mamiferos.concat(aves,reptiles)
console.log(animales);

//? Metodos de Array con FUNCIONES INCLUIDAS

//* some() => se fijara si ALGUN elemento del Array cumple con la condicion que le solicitemos. Me devuelve UN BOOLEANO

let array_numeros = [1,5,8,14,21,3,17,6,24]
let numeroMayorQue10 = array_numeros.some((numero) => numero > 10)
console.log(numeroMayorQue10);

//* every() => se fijara si TODOS los elementos cumplen con la condicion que le solicitemos. Me devuelve un booleano.

array_numeros = [1,5,8,14,21,3,17,6,24]
let todosMayoresA10 = array_numeros.every((numero) => numero > 10)
console.log(todosMayoresA10);

//* filter(): FILTRA resultados segun la condicion que le pasemos, y nos arma un NUEVO ARRAY.

let array_frutas = ["Manzana","Pera","Mango","Anana","Sandia","Frutilla","Kiwi"]
let frutasConLetrasM     = array_frutas.filter((fruta) => fruta[0] === "M")
console.log(frutasConLetrasM);

//*Map(): ejecuta una accion a cada elemento de nuestro Array. Devuelve una nueva lista con esos elementos luego de la accion

array_frutas =["Manzana","Pera","Mango","Anana","Sandia","Frutilla","Kiwi"]
let frutasEnMayuscula = array_frutas.map((fruta) => fruta.toUpperCase())
console.log(frutasEnMayuscula);

//*reduce: nos permite reducir un array a una unica expresion

let array_numerico = [1,3,5,7,1,2,3]
let sumaDeNumeros = array_numerico.reduce((total,numero) => total + numero )
console.log(sumaDeNumeros);

//* from(): Crea un Array desde una cadena o Array existente con alguna condicion

let nombres = ["Seba","Leo","Carlos","Mariana"]
let arrayDeSaludos = Array.from(nombres,(dato) => "Hola soy "+ dato)
console.log(arrayDeSaludos);

//* isArray: true or false, si es un Array. Requiere usar la clase constructora "Array"

mi_string = "hola mundo"
console.log(Array.isArray(mi_string));