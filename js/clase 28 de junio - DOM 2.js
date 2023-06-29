//Selectores por query: 
//queryselector, nos va a permitir seleccionar MULTIPLES ELEMENTOS Y EN DIFERENTES TIPOS

//? Podemos seleccionarlo por el PRIMER ELEMENTO ENCONTRADO
let elemento = document.querySelector('div.container')

//? Podemos seleccionar TODOS los elementos encontrados
let contenedor = document.querySelectorAll('div.container')

//seleccionando el elemento p de la class parrafos con id parrafoArticle
let parrafo_texto = document.querySelector('p.parrafos#parrafoArticle')
//parrafo_texto.innerText = "Esto es un parrafo selecionado"

//seleccionando TODOS LOS parrafos de la class text-container

let parrafos_div = document.querySelectorAll('p.text-container')
parrafos_div.innerText = "Texto random"

// cuando tenemos una query, esto es UNA LISTA. Asi que debemos recorrerla para poder aplicar EL MISMO METODO A CADA ELEMENTO

for (let i = 0; i<parrafos_div.length;i++){
    parrafos_div[i].innerText = "Texto aleatorio"
}

//selecciamos la lista de elementos del tag parrafo

let mis_parrafos = document.querySelectorAll('p.text-container')

for (let i = 0; i<mis_parrafos.length;i++){
    mis_parrafos[i].innerText = "Texto cambiado"
}

//PROPIEDADES DE ELEMENTOS: 

let parrafo_elegido = document.querySelector('p#parrafoArticle')


/*

crearemos 4 elementos del tipo input (tag input), cuya clase es inputButton, y no poseen ID. 

van a seleccionar con el query selector, TODOS esos elementos.
Y van a cambiar su placeholder a TODOS Y que diga "ingrese un dato"

*/
