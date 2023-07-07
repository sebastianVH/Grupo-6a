/* Vamos a tomar todos los elementos del tipo button, y vamos a agregarle el evento de escucha en el click, y que me agregue el elemento indicado en el div 

Una vez hecho el click, vamos a cambiarle la clase , y ponerle la de btnAgregado

*/

//*Seleccionemos todos los botones del DOM

let botones = document.querySelectorAll('button.btnAgregar')

//*recorrer todos los botones con un "for - OF" (recorriendo los objetos), y cada boton, agregarle el METODO EVENT LISTENER, para que muestre el ID

//*Ademas, luego de clickear, cambiarle la class a la de btnAgregado

for (const boton of botones){
    boton.addEventListener('click',(e) =>{
        alert(`Se agrego el elemento ${e.target.id}`);
        e.target.className = 'btnAgregado'
        e.target.innerText = 'Agregado'
    })
}

/*Repitamos lo mismo pero con las X (nos diria un mensaje, que seria "Quitamos el elemento X") */

let botonesCerrar = document.querySelectorAll('button.quitar')
for (const boton of botonesCerrar){
    boton.addEventListener('click',(e)=>{
        alert(`Se quito el elemento ${e.target.id}`)
    })
}