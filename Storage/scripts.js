//Agregarle al boton la funcionalidad para que tome el dato de nuestro input

/* Local Storage: Nos permite guardar datos en nuestro servidor,paraque al cambiar o refrescar las paginas,el contenido no se elimine!*/
//Para utilizarlo, usamos el objeto localStorage:
localStorage
/*
//Tiene 3 metodos principales

localStorage.setItem() //=> nos permite almacenar un valor en el almacenamiento local
localStorage.getItem() //=> nos permite obtener el VALOR guardado en esa llave
localStorage.removeItem() //=> nos permite eliminar una llave del almacenamiento local

// tiene un metodo que ELIMINA todo el contenido del almacenamiento local

localStorage.clear()
*/

//tomar esta variable y almacenar dentro, lo que contenga el LocalStorage
const carritoCompras = recuperarCarrito() // []

const lista_articulos = [
    {id:1,
    nombre:"Zapatillas",
    precio: 350
    },
    {id:2,
    nombre: "Remeras",
    precio: 450
    },
    {id:3,
    nombre: "Bolsos",
    precio: 150
    },
    {id:4,
    nombre: "Medias",
    precio: 100
    }
]

// let campo_input = document.querySelector("#contenido")

let contenedor = document.querySelector("#articulos")


function agregarAlCarrito(id){
    let producto = lista_articulos.find( producto => producto.id === Number(id))
    carritoCompras.push(producto)
    localStorage.setItem('carritoCompras', JSON.stringify(carritoCompras))
    //
}

function agregarBotones(){
    let botones = document.querySelectorAll(".button-card")
    for( const boton of botones){
        boton.addEventListener('click',(e)=>{
            //debemos crear una funcion que lo agregue al carrito
            agregarAlCarrito(e.target.id)
        })
    }
}

//Como ver mi almacenamiento local:

//archivos de almacenamiento de datos: JSON 

//ARCHIVO JSON (JavaScript Object Notation)
//JSON.stringify = nos permite transformar un objeto Js a un objeto JSON
//JSON.parse = nos permite transformar un objeto JSON  a un objeto Js


//archivos locales del tipo Array

//? crear el producto:

function crearCard(producto){
    return `
    <div class="card">
        <div>${producto.nombre}</div>
        <div>$${producto.precio}</div>
        <button class="button-card" id=${producto.id}>Agregar +</button>
    </div>
    `
}

function cargarProductos(){
    lista_articulos.forEach((producto) =>{
        let productoCreado = crearCard(producto)
        contenedor.innerHTML += productoCreado
    })
}

function recuperarCarrito(){
    //return JSON.parse(localStorage.getItem("carritoCompras"))
    let contenido = JSON.parse(localStorage.getItem("carritoCompras"))
    if (!contenido) {
        return []
    } else {
        return contenido
    }
}


cargarProductos()
agregarBotones()

export default carritoCompras