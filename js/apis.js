function traerDatosUser(cb) {
    /* traer los datos de jsonplaceholder, para usarlos en mi pagina (https://jsonplaceholder.typicode.com/users)
    */
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => cb(data))
    
}

function armarUsuario(usuario){
    return `<tr>
                <td>${usuario.id}</td>
                <td>${usuario.name}</td>
                <td>${usuario.username}</td>
                <td>${usuario.email}</td>
                <td>${usuario.address.city}</td>
                <td>${usuario.phone}</td>
            </tr>`
}

function cargarDatosTabla(data){
    /* carga cada usuario al body d la tabla */
    let bodyTabla = document.querySelector("tbody#table-body")
    data.forEach( user => {
        let userArmado = armarUsuario(user)
        bodyTabla.innerHTML +=userArmado
    });
}

// const misDatos = traerDatos()
// console.log(misDatos);

traerDatosUser(cargarDatosTabla)

/* Posts*/

function traerPosts(cb,cant){
    /* va a traer los datos de la API */
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(respuesta => respuesta.json())
    .then(data => cb(data,cant))
}

function armarPost(post){
    /* armar los datos de UN POST en un HTML para luego agregarlo a la tabla */
    return `<tr>
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>
            </tr>`
}

function cargarDatosPosts(datos,numPost){
    /*tomar todos los datos y pasarlos para cargar a la tabla */
    let tablaPost = document.querySelector("tbody#table-post")
    tablaPost.innerHTML = "" //vacio la tabla antes de cargar datos nuevos
    for(let i=0; i<numPost;i++){
        let postArmado = armarPost(datos[i])
        tablaPost.innerHTML += postArmado
    }
}

function cargarPosts(){
    let datosInput = document.querySelector("input")
    let cantPostACargar = datosInput.value;
    if(cantPostACargar > 100){
        alert("No se puede cargar mas de 100 post")
        return
    }
    traerPosts(cargarDatosPosts,cantPostACargar)
}

