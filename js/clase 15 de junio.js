/*
?Closure es una funcion que devuelve una ejecucion de otra funcion

?Callback es una funcion, que recibe como parametro otra funcion, para ejecutarse dentro de ella

En el closure: LA FUNCION PRINCIPAL TIENE EN SU RETURN OTRA FUNCION
en el callback: la funcion principal NO TIENE NECESARIAMENTE LA FUNCION EN EL RETURN, Y TIENE EN SUS PARAMETROS UNA FUNCION

*/

//! CALLBACK VS CLOSURES

function unaFuncion() {
    return function () {
        return "Otra funcion"
    }
}

function miFuncion(cb) {
    let elemento = cb()
    return elemento
}

//! ejemplos CLOSURE

function sumarNumero(num1){
    return function (num2) {
        return num1+num2
    }
}

let sumarNumeroB = sumarNumero(5)
sumarNumeroB(3)

/*
function devuelvePalabra() {
    return function () {
    }
}

let palabra = devuelvePalabra()
palabra()
*/

function saludar(name) {
    return function (surname){
        return `Hola ${name} ${surname}`
    }
}

let variable = saludar("Seba")
variable("Duraznito")


function indicarNombre(nombre){
    return function(fecha_nac){
        let edad = 2023-fecha_nac
        return `Hola ${nombre}, tu edad es de ${edad}` //alt96 son las comillas invertidas
    }
}

let indicarNacimiento = indicarNombre("Sebastian")
indicarNacimiento(1996)

//*CALLBACK ES UNA FUNCION QUE TIENE COMO PARAMETRO OTRA FUNCION

function calcularEdad(fecha_nac){
    let edad = 2023 - fecha_nac
    return edad
}

function saludarUsuario(nombre, fecha, funcion){
    let edad = funcion(fecha)
    return `Hola ${nombre} tu edad es ${edad} `
}

saludarUsuario("Seba",1987,calcularEdad)

//Ejemplo 2 CALLBACK

function qBo(num) {
    let resultado = num*num*num
    return resultado
}

function definirNumero(numero,unaFuncion){ //me dice si el numero es par o impar y me devuelve tambien el cubo
    if(numero%2 === 0){
        num = "Es par"
    } else {
        num = "Es impar"
    }

    let cubo = unaFuncion(numero)

    return `${num} y su cubo es ${cubo}`
}

definirNumero(5,qBo)


function bienvenida(){
    return "Bienvenidos"
}

function despedida(){
    return "Hasta la proxima"
}

function ejecucionCb(cb){
    console.log("Se ejecuto la funcion: ");
    let frase = cb()
    return frase
}

//*ARROW FUNCTION 
let execute = () => ejecucionCb(despedida)
execute("algo")

/*
let ejecutar = function () {
    return ejecucionCb(despedida)
}
*/

