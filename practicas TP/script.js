/* pedir mediante un ingreso numerico, un id de pokemon, traeremos la info de ese pokemon y lo agregaremos a la tabla que voy a tener creada en mi HTML */


//* Verifico mi almacenamiento local: si tengo pokemons o si esta vacio
const listaPokemons = JSON.parse(localStorage.getItem("pokemons")) || []


//*Crear una funcion que busque en nuestra API el pokemon

const buscarPokemon = async (id) => {
    const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const pokemonBuscado = await dataPokemon.json()
    listaPokemons.push(pokemonBuscado)
    localStorage.setItem("pokemons",JSON.stringify(listaPokemons))
    return pokemonBuscado
}

//*Crear una funcion que arme una fila con el pokemon pedido y sus datos
const armarFila = (pokemon)=>{
    return `<tr>
                <td>${pokemon.id}</td>
                <td>${pokemon.name}</td>
                <td>${pokemon.height}</td>
                <td>${pokemon.weight}</td>
                <td><img width="75px" src="${pokemon.sprites.other.dream_world.front_default}" alt=""></td>
            </tr>`
}

const agregarDatosTabla = async () => {
    const input = document.querySelector("input#input-pokemon")
    const tabla = document.querySelector("tbody#cuerpo-tabla")
    const pokemonEncontrado = await buscarPokemon(input.value)
    const filaLista = armarFila(pokemonEncontrado)
    tabla.innerHTML += filaLista
}

const cargarPagina = () => {
    const tabla = document.querySelector("tbody#cuerpo-tabla")
    tabla.innerHTML = ""
    listaPokemons.forEach( pokemon => {
        const filaArmada = armarFila(pokemon)
        tabla.innerHTML += filaArmada
    } )
}

cargarPagina()