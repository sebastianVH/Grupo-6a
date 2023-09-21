const crearTarjeta = () => {
    return `
            <div class="card" style="width: 18rem;">
                <img src="https://media.tycsports.com/files/2023/06/24/584696/messi_1440x810_wmk.webp?v=1" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Mi tarjeta</h5>
                    <p class="card-text">Una tarjeta de prueba</p>
                    <p class="card-text">Otro texto de mi tarjeta</p>
                </div>
            </div>
            `
}

const agregarTarjeta = () =>{
    const contenedor = document.querySelector(".contenedor-tarjeta")
    const nuevaTarjeta = crearTarjeta()
    contenedor.innerHTML += nuevaTarjeta
}


const boton = document.querySelector("#btnAgregar")
boton.addEventListener("click", (e)=> {
    agregarTarjeta()
})

//* Filter y some

const personas = [
    {
        id_usuario: 1,
        username: "Sebas",
        personaje_favorito: "Goku",
    },
    {
        id_usuario: 2,
        username:"Leandro" ,
        personaje_favorito: "Pikachu",
    },
    {
        id_usuario: 3,
        username: "Magali",
        personaje_favorito: "Doraemon",
    }
]

//*Some: nos va a devolver un booleano: true o false

const respuesta = personas.some( persona => persona.personaje_favorito === "Mario Bros")
respuesta

//*Filter: nos devuelve un objeto completo
const resultado = personas.filter( persona => persona.personaje_favorito !== "Goku" )
resultado

