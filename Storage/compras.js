//import carritoCompras from "./scripts";

let carritoCompras = JSON.parse(localStorage.getItem("carritoCompras"))

let tabla = document.querySelector("tbody")

function listarCarrito(carrito){
    tabla.innerHTML = ""
    carrito.forEach( producto =>{
        let item = agregarItem(producto)
        tabla.innerHTML += item
    })
}

function agregarItem(item){
    return `
    <tr>
        <td>${item.id}</td>
        <td>${item.nombre}</td>
        <td>${item.precio}</td>
    </tr>
    `
}

let sumaTotal = document.querySelector("#totalCompra")

const totalCompra = () => {
    let total = 0
    carritoCompras.forEach( producto =>{
    total += producto.precio
    })
   sumaTotal.innerHTML = `Total Compra $${total}`
}

const finalizarCompra = () => {
    const btnComprar = document.querySelector("#btnFinalizar")
    btnComprar.addEventListener("click",(e) => {
        alert("Compra Finalizada con exito!!")
        localStorage.clear()
        tabla.innerHTML = ""
        sumaTotal.innerHTML = "No hay items en el carrito"
    })
}

finalizarCompra()
totalCompra()
listarCarrito(carritoCompras)