//TODO: usaremos while y for para crear lo que se denomina un TO-DO (es una lista de actividades que tenemos que completar). ol objetivo de nuestro TO-DO es que nos liste todas las actividades que tenemos pendientes para hacer, crear nuevas y eliminar. Por ultimo tendra la opcion de salir, que es la que cierra nuestro programa.

//En consola, mostrare los datos devueltos. y por prompt pediremos datos

let actividades = [] //este array almacenara las actividades


while(true)
{

        let option = prompt("Ingrese una opcion:\n1)Ver lista de tareas\n2)Agregar tarea\n3)Eliminar Tarea\n4)Salir")


        if (option === "1"){ //listar actividades
            if (actividades.length === 0)
            {
                alert("No hay tareas para realizar");
            }
            for (let tarea of actividades){
                alert(tarea);
            }
        }

        if (option === "2"){
            let tarea = prompt("Ingrese la tarea a realizar: ")
            actividades.push(tarea) //con push guardamos la tarea al final de la lista
            alert(`La tarea ${tarea} ha sido agregada a la lista.`) 
        }

        if (option === "3"){

            let tarea = prompt("Elija la tarea que desea eliminar: "+ actividades.join("\n"))
            let borrada = actividades.splice(tarea-1,1)
            alert(`La tarea "${borrada}" fue eliminada de la lista`);
        }

        if (option === "4"){
            alert("Gracias por utilizar nuestro programa. ")
            break;
        }
}