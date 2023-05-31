//* crear una funcion que reciba por parametros un animal y una especie (ej: gato, felino - perro,canino) y arme un OBJETO como ARGUMENTO DENTRO DE SUS PROPIEDADES => ({animal:'gato',especie:'felino'} , {animal:'perro',especie:'canino'}) . Ese objeto debe ser devuelto y debemos mostrar un mensaje por alert que diga "El animal XXXX pertenece a la especie XXXXXX" ej: => "el animal gato pertenece a la especie felino"

/*
function cargarAnimal(animal,especie)
{
    let objeto = {animal:animal,especie:especie}
    return objeto
}

let dato1 = prompt("Indique el animal: ") //va a guardar el animal que cargue => "Gato"
let dato2 = prompt("Indique la especie: ") // va a guardar la especie => "Mamiferos"

let dato_obtenido = cargarAnimal(dato1,dato2) //almaceno lo obtenido de mi funcion, en una nueva variable

// dato_obtenido = {animal:"Gato",especie:"Mamiferos"}

alert(`el animal ${dato_obtenido["animal"]} pertenece a la especie ${dato_obtenido.especie}`)
*/

//* Funcion con funciones dentro

//definir funciones para suma, resta , multiplicacion, division. TODAS RECIBEN 2 NUMEROS POR PARAMETRO
// estas funciones deber RETORNAR resultados, y estos luego se usaran para mostrar en pantalla lo que nos devuelve 
// estas funciones se ejecutaran al momento de ser seleccionadas en un menu
// esto se ejecutara dentro de otra funcion llamada "programaPrincipal"

function suma(num1,num2){
    let resultado = parseInt(num1)+parseInt(num2)
    return resultado
}
function resta(num1,num2){
    let resultado = num1-num2
    return resultado
}
function multiplicacion(num1,num2){
    let resultado = num1*num2
    return resultado
}
function division(num1,num2){
    let resultado = num1/num2
    return resultado
}


function programaPrincipal() {
    let opcion = prompt("Indique la operacion que desea hacer:\n1)Suma\n2)Resta\n3)Multiplicacion\n4)Division: ")
    let numero1 =prompt("Indique el primer numero: ")
    let numero2 = prompt("Indique el segundo numero: ")

    if(opcion == "1"){
        var res = suma(numero1,numero2)
    }
    else if(opcion == "2"){
        var res = resta(numero1,numero2)
    }
    if(opcion == "3"){
        var res = multiplicacion(numero1,numero2)
    }
    if(opcion == "4"){
        var res = division(numero1,numero2)
    }
    alert(`El resultado es ${res}`)
}

programaPrincipal()



