/*
EJEMPLO:
        <div class="tarea">
            <input type="checkbox" name="check" id="check-list">
            <span>Sacar la basura</span>
        </div>
*/

const listaTareas = []

const agregarClicks = () => {
    const botonera = document.querySelectorAll('div.tarea')
    for (const boton of botonera){
        boton.addEventListener('click',(e)=>{
            boton.className = 'completado'
        })
    }
}

let botonAgregar = document.querySelector('button#btnAgregar')

botonAgregar.addEventListener('click',(e)=>{
    let entradaInput = document.querySelector('input#new-tarea')
    let divTareas = document.querySelector('div#container-div')
    let tarea = entradaInput.value
    //agregamos una tarea al array de tareas
    listaTareas.push(tarea)
    //vaciar mi div que contiene las tareas
    divTareas.innerHTML = ''
    //recorro cada tarea que hay en mi array listaTareas
    listaTareas.map((tarea,index) => {
        divTareas.innerHTML += crearTarea(tarea,index)
    })
    entradaInput.value = ''
    agregarClicks()
})

function crearTarea(tarea,index){
    return `<div class="tarea" id="${index}">
                <input class="checkbox" type="checkbox" name="check" id="${index}">
                <span>${tarea}</span>
            </div>`
}




