//?CLOSURE: es una funcion, que devuelve otra funcion.
//?significa que nosotros tenemos una funcion, que al momento de ejecutarla, va a devolver el resultado de una funcion que se haya ejecutado dentro de su return

function contador() {
    let counter = 0
    return function () {
        counter = counter + 1
        return counter
    }
}

let sumarContador = contador()

sumarContador()
sumarContador()
sumarContador()
sumarContador()
sumarContador()

//?otro ejemplo 

function saludo(num1,num2) {

    let res = num1+num2
    return function () {
        return `El resultado es`
    }
}

let unSaludo = saludo(3,5)
let resultado = unSaludo()
resultado

//CALLBACK , es una funcion que lleva como parametro OTRA FUNCION

function cuadrado(numero){
    return numero*numero
}

function ejecutarCuadrados(funcion) {
    
    const listaCuadrados = [] //almacena todos los resultados de nuestros cuadrados
    return function(num){
        let resultado = funcion(num)
        listaCuadrados.push(resultado)
        listaCuadrados
        return resultado
    }
}

let consultarCuadrado = ejecutarCuadrados(cuadrado)
consultarCuadrado(5)
consultarCuadrado(10)
consultarCuadrado(3)

//! RESUMEN: closure: es una funcion que tiene en su return una funcion anonima que devuelve algun resultado
//! callback: es una funcion que EN SUS PARAMETROS recibe otra funcion

function saludar(name) {
    return `Hola ${name}`
}

function armarSaludo(cb){
    
    return function(nombre){
        return cb(nombre)
    }
}

let saludos = armarSaludo(saludar)
saludos('Jose')