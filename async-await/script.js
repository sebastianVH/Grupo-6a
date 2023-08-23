//ASYNC-AWAIT COMO PROMESAS

const misPost = recuperarPost()
//*Funcion que me permite hacer un pedido a una API y traer los datos
const verPost = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = await response.json();
        misPost.push(data);
        localStorage.setItem("misPosteos",JSON.stringify(misPost))
        return misPost
    } catch (error) {
        console.log("Error detectado",error.message);
    }
}

//? como se veria si fuese una promesa con then/catch
// function verPost(){
//     fetch(`https://jsonplaceholder.typicode.com/posts/15`)
//     .then( response => response.json())
//     .then( data => console.log(data))
//     .catch(error => error.message)
// }

//*Arma la estructura HTML que pondremos en nuestro documento
function armarPost(post){
    /* armar los datos de UN POST en un HTML para luego agregarlo a la tabla */
    return `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td>
<td>${post.body}</td></tr>`
}

//*Carga a mi HTML la estructura creada por la funcion anterior
function cargarDatosPosts(datos){

    let postArmado = armarPost(datos)
    return postArmado
    
}

//* envia a la funcion de verPost, cual sera el que querramos seleccionar
async function cargarPosts(){
    let datosInput = document.querySelector("input")
    let postACargar = datosInput.value;
    if(postACargar > 100){
        alert("No hay mas de 100 post disponibles")
        return
    }
    try {
        // verPost(postACargar).then(posteo => cargarDatosPosts(posteo))
        const posteos = await verPost(postACargar)
            /*tomar todos los datos y pasarlos para cargar a la tabla */
        let tablaPost = document.querySelector("tbody#table-post")
        tablaPost.innerHTML = "" //vacio la tabla antes de cargar datos nuevos
        posteos.forEach( post =>{
            const posteo = cargarDatosPosts(post)
            tablaPost.innerHTML += posteo
        })
    } catch (error) {
        console.error(error);
    }
}

function recuperarPost(){
    return JSON.parse(localStorage.getItem("misPosteos")) || []
}

function eliminarPosts(){
    localStorage.removeItem("misPosteos")
    let tablaPost = document.querySelector("tbody#table-post")
    tablaPost.innerHTML = "" 
}


function init(){
    const formulario = document.querySelector("#formulario")
    formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
    let inputs = document.querySelectorAll("input.form-data")
    let datos_a_enviar = {}
    for (const input of inputs){
        datos_a_enviar[input.id] = input.value;
    }
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({datos_a_enviar}),
    headers: {
    'Content-type': 'application/json; charset=UTF-8',
    },
    }).then(response => response.json())
    .then(data => console.log(data))
})}

//* EXPRESS

init()



