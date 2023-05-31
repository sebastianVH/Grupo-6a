//? FUNCIONES: QUE SON Y PARA QUE NOS SIRVEN
//1) poder ejecutar codigo CUANDO YO LO INDIQUE
//2) evitar el DRY(Don't repeat yourself)

//? CREACION DE LA FUNCION:

function saludar(){
    alert("Hola mundo!!");
}

//¿como usamos la funcion? debemos INVOCARLA/LLAMARLA mediante su nombre

//! FUNCION CON PARAMETROS: para esto, debemos pasarlos DENTRO DEL PARENTESIS:

function saludarUser(nombre,materia){
    alert(`Hola ${nombre}, bienvenido/a a ${materia}!!!`)
}

let materia = 'JavaScript'
let profe = 'Seba'

//saludarUser(profe,materia)

//! RECORDAR QUE: EL PARAMETRO DE LA CREACION EN UNA FUNCION, ES PARA UTILIZARLA DENTRO DEL CODIGO. NOSOTROS PODEMOS, AL MOMENTO DE LLAMAR A LA FUNCION, PASARLE CUALQUIER ARGUMENTO (variable, strign,numero)

//? CONTEXTOS Y USOS DEL RETURN

// function sumarNumeros(num1,num2) {
//     let suma = num1+num2
//     return suma
// }
// let resultado = sumarNumeros(5,3)
// alert( resultado + " es el resultado de la suma")

//? crear un programa con funciones que reciba por parametro un nombre de usuario, arme una frase que lo salude, y lo devuelva para usarlo en un alert

function bienvenida(name){
    let frase = 'Hola '+name+' bienvenido a Js!!!'
    return frase
}

//let nombre = prompt("Ingrese su nombre: ")
// let saludo = bienvenida(nombre)
//alert(saludo)

//*creamos un programa que reciba por argumento 2 numeros, los multiplique, devuelva ese resultado de la multiplicacion y lo muestre en un alert

function multiplicar(num1,num2){
    let multiplicacion = num1*num2
    return multiplicacion
}

// let numero1= prompt("Ingrese el primer numero: ")
// let numero2= prompt("Ingrese el segundo numero: ")

// let result = multiplicar(numero1,numero2)
// alert(result)

//? funcion que me permite saber si un usuario puede ingresar al sistema segun su password. Si pone el password, podra continuar, de lo contrario, le dira contraseña incorrecta, y volvera a preguntar lo mismo

let id_user= 1525

function identificarUser() {
    while (true) {
    let password = prompt("Ingrese la contraseña: ")
    if (password == id_user){
        alert("Acceso concedido.")
        break
    } else {
        alert("Contraseña incorrecta. Vuelva a ingresar la contraseña.")
    }
}
}

identificarUser()

//* crear una funcion que reciba por parametros un animal y una especie (ej: gato, felino - perro,canino) y arme un OBJETO como ARGUMENTO DENTRO DE SUS PROPIEDADES => ({animal:'gato',especie:'felino'} , {animal:'perro',especie:'canino'}) . Ese objeto debe ser devuelto y debemos mostrar un mensaje por alert que diga "El animal XXXX pertenece a la especie XXXXXX" ej: => "el animal gato pertenece a la especie felino"

