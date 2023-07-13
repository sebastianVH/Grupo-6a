/*
EJEMPLO:
        <div class="tarea">
            <input type="checkbox" name="check" id="check-list">
            <span>Sacar la basura</span>
        </div>
*/

let botonAgregar = document.querySelector('button#btnAgregar')

botonAgregar.addEventListener('click',(e)=>{
    let entradaInput = document.querySelector('input#new-tarea')
    let tarea = entradaInput.value
    let tareaCreada = crearTarea(tarea)
    let divTareas = document.querySelector('div#container-div')
    divTareas.innerHTML += tareaCreada
    entradaInput.value = ''
})

function crearTarea(tarea){
    return `<div class="tarea">
                <input type="checkbox" name="check" id="check-list">
                <span>${tarea}</span>
            </div>`
}

