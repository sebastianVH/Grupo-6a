// para navegar en el DOM desde Js, no debemos olvidarnos nunca de primero hacer referencia AL DOCUMENTO

//? acceso a un/unos elemento/s a traves de la etiqueta => nos devuelve un array
let contenido = document.getElementsByTagName('p')

//? acceso al elemento EXACTO en el documento con su ID => un OBJETO
let elemento = document.getElementById('parrafoFooter')

//? a traves de las clases, nos devuelve UN ARRAY de objetos
let clases = document.getElementsByClassName('parrafos')

//? a traves del atributo NAME de una etiqueta 
let seccion = document.getElementsByName('seccionPrincipal')


//? accedamos al div a traves de los diferentes tipos de metodos del documento
let divTag = document.getElementsByTagName('div')

let divId = document.getElementById('miDiv')

let divClase = document.getElementsByClassName('container')

let divName = document.getElementsByName('divDoc')

/* 
homework:
van a capturar un elemento de tag a, cuya clase sera "aClass", su id sera "miLink", y su name sera "aName"

capturar este elemento de las 4 maneras posibles


*/