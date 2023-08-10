// console.log("1: Llevar la olla");
// console.log("2: llenar la cuchara")
// setTimeout(() => {
//     console.log("3: esperar el plato")
// },2000) /*ejecuta un codigo despues de determinado tiempo: 1000ms = 1seg */
// console.log("4:servir")


//! Promesa async-await: esperar una accion, para ejecutar el siguiente proceso

// async function servirSopa(){
//     let plato = await setTimeout(()=>{console.log("Plato en mano")},2000)
//     console.log("Tirar cucharada")
// }

// servirSopa()

//? caso de uso real: supongamos que tenemos una base de datos de usuarios y queremos ver cuales son

fetch("https://rickandmortyapi.com/api/character/1000")
.then(response => response.json())
.then(data => console.table(data))

