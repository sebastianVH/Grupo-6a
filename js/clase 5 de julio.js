/*
-elegir un elemento del tipo div que tengan en su HTML
- crear un elemento p
- a ese elemento, agregarle un id = "miTexto", una class = "textoClase" , un inner text que diga: "Estoy creado desde Js" y ese elemento lo van a agregar como child a su elemento div seleccionado
*/

//Elegir un contenedor
let contenedores = document.querySelector('div')

/* creamos un elemento p */
let nuevoElemento = document.createElement('p')

/* agregamos un id = "miTexto", una class = "textoClase" , un inner text que diga: "Estoy creado desde Js"*/
nuevoElemento.id = "miTexto"
nuevoElemento.className = "textoClase"
nuevoElemento.innerText = "Estoy creado desde Js"

//Agregamos como child (como un hijo, contenido interno) al div que elegimos al principio

//contenedores.appendChild(nuevoElemento)

//* TEMPLATES STRINGS: Esto nos permite crear un elemento HTML, de una manera mas sencilla

//? replicaremos el mismo ejercicio pero usando un TEMPLATE STRING
/*
- crear un elemento p
- a ese elemento, agregarle un id = "miTexto", una class = "textoClase" , un inner text que diga: "Estoy creado desde Js"
*/

let elementoCreado = '<p id="miTexto" class="textoClase">Yo tambien estoy creado desde JS</p>'
//contenedores.innerHTML += elementoCreado

//? ¿Como podriamos indicar que esto lo haga el usuario?
// let clase = prompt("Indique el nombre de la class: ")
// let id = prompt("Indique el nombre del ID: ")
// let textoInterno = prompt("Indique el texto del elemento: ")

// let elementoDeUsuario = `<p class="${clase}" id="${id}">${textoInterno}</p>` //alt+96 coloco comillas invertidas
// let contenedorElegido = document.querySelector('div#miDiv')
// contenedorElegido.innerHTML += elementoDeUsuario

//? CREAREMOS TEXTOS DESDE JS Y HTML

function agregarParrafo(){
    //tomar el contenido de nuestro INPUT:
    let miInput = document.querySelector('input#textoParaParrafo') //seleccionamos el tag del tipo input
    let textoDelInput = miInput.value //tomamos el value de ese input
    let elementoCreado = `<p id="miTexto" class="textoClase">${textoDelInput}</p>` //creamos un elemento usando TEMPLATE STRING
    let contenedorElegido = document.querySelector('div#miDiv') //elegimos el div que queriamos agregar el elementocread
    contenedorElegido.innerHTML += elementoCreado //INSERTARLO COMO HTML
    miInput.value = "" //devolvemos el valor del input en vacio
}
