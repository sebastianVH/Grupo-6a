// Atributos que podemos utilizar en nuestros elementos del DOM


let elemento_input = document.querySelector('input.entrada')

//Podemos agregarle ATRIBUTOS desde Js

//agregarle o cambiarle un ID:

elemento_input.id = "miInput"

//agregar o cambiar la class:

elemento_input.className = "inputs"

//crear un nuevo elemento:

let elemento_nuevo = document.createElement('a')
//le agregamos una clase llamada linkReferencia
elemento_nuevo.className = 'linkReferencia'
//le agregaremos el ID miLink
elemento_nuevo.id = 'miLink'

//para agregar una referencia, podriams utilziar el atributo href

elemento_nuevo.href = 'https://www.quackit.com/html/'
//agreguemos un texto que haga referencia hacia el elemento
elemento_nuevo.innerText= "link a Quakit"
elemento_nuevo.target = '_blank'

//seleccionemos el contenedor donde guardaremos el nuevo elemento
let contenedores = document.querySelectorAll('div.container')
let seleccionado = contenedores[1]
seleccionado.appendChild(elemento_nuevo)

/*

elegir un elemento del tipo div que tengan en su HTML
- crear un elemento p
- a ese elemento, agregarle un id = "miTexto", una class = "textoClase" , un inner text que diga: "Estoy creado desde Js" y ese elemento lo van a agregar como child a su elemento div seleccionado

*/
