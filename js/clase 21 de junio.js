// ARROW FUNCTION 


function sumarNumeros(a,b){
    return a+b
}

sumarNumeros(3,6)

//Pueden tener o no, un RETURN implicito 

// const sumaNumeros = function(a,b){
//     return a+b
// }

//1-linea: cuando tenemos que ejecutar alguna funcion corta (resultado corto)
const sumaNumeros = (a,b) => a+b

sumaNumeros(9,7)

// crearlas con un return EXPLICITO y con LLAVES


const restarNumeros = (a,b) => {
    let resultado = a-b
    return resultado
}

restarNumeros(12,6)

// function sumarNumero(num1){
//     return function (num2) {
//         return num1+num2
//     }
// }

const sumarNumero = (num1) => (num2) => num1+num2

let sumarNumeroB = sumarNumero(9)
sumarNumeroB(7)

//conversion a Arrow Function

// function saludar(name) {
//     return function (surname){
//         return `Hola ${name} ${surname}`
//     }
// }

const saludar = (name) => (surname) => `Hola ${name} ${surname}` 

let miSaludo = saludar("Seba")
miSaludo("Perez")


// function indicarNombre(nombre){
//     return function(fecha_nac){
//         let edad = 2023-fecha_nac
//         return `Hola ${nombre}, tu edad es de ${edad}` //alt96 son las comillas invertidas
//     }
// }

const indicarNombre = (nombre) => (fecha_nac) => `Hola ${nombre}, tu edad es de ${2023-fecha_nac}`


let indicarNacimiento = indicarNombre("Sebastian")
indicarNacimiento(1996)


//CALLBACKS Y ARROW FUNCTION

// function calcularEdad(fecha_nac){
//     let edad = 2023 - fecha_nac
//     return edad
// }

const calcularEdad = (fecha_nac) => 2023-fecha_nac

// function saludarUsuario(nombre, fecha, funcion){
//     let edad = funcion(fecha)
//     return `Hola ${nombre} tu edad es ${edad} `
// }

const saludarUsuario = (nombre,fecha,cb) => `Hola ${nombre} tu edad es ${cb(fecha)} `

saludarUsuario("Seba",1987,calcularEdad)

//
const miFuncion = (nombre,apellido) => {
    return `Hola ${nombre} ${apellido}`
}

/*
homework: pasar el sig codigo a arrow function

function bienvenida(){
    return "Bienvenidos"
}

function despedida(){
    return "Hasta la proxima"
}

function ejecucionCb(cb){
    let frase = cb()
    return frase
}

//*ARROW FUNCTION 
let execute = () => ejecucionCb(bienvenida)
execute()
*/

//?OPERADOR TERNARIO: es un operador de IF-ELSE de una sola linea, que evalua 2 expresiones

// si el interruptor esta en "on", nos devuelve la frase "la lamparita esta prendida", sino "la lamparita esta apagada"
// en una variable llamada ESTADO, guardar la frase que corresponda
let interruptor = "OFF"

if (interruptor === "ON") {
    var estado = "La lamparita esta prendida"
} else {
    var estado = "La lamparita esta apagada"
}

// 3 partes: EVALUACION LOGICA - RESULTADO QUE SEA VERDADERO - RESULTADO FALSO

let lamparita = (interruptor === "ON") ? "La lamparita esta prendida" : "La lamparita esta apagada"

lamparita

//EJEMPLO 2
//evaluar si el usuario INGRESA CORRECTA LA CONTRASEÑA

let password = 1258
let ingreso_usuario = 128

if (ingreso_usuario === password){
    var acceso = "Acceso concedido"
} else {
    var acceso = "Contraseña incorrecta"
}

let userAccess = (ingreso_usuario === password)?"Acceso concedido":"Contraseña incorrecta"

userAccess

/*
TERNARIO:
homework
evaluar si el usuario puede ingresar, solo si es mayor o igual de 18 de edad. En caso que cumpla , se le indica el mensaje "Acceso concedido", sino pasara el mensaje "Error: edad no valida"


*/



