//? HOISTING - CONTEXTOS

/*
Falsies: false , string vacio, numero 0, variable undefined
*/

const comida = "Whiskas"

if (comida) { //Analiza si su contenido es True o False 
    const comida = "Sabrositos"
    
} else {
    const comida = "Gati"
}

while (true){
    const comida = "Dogui"
    break
}


comida

//! REGLA IMPORTANTE: LAS VARIABLES DECLARAS CON LET y CONST "MUEREN" (SE DESTRUYEN) EN EL ENTORNO QUE SON CREADAS


//Hoisting: ELEVA LAS FUNCIONES A LA PARTE SUPERIOR DEL CONTEXTO EN EL QUE SE ENCUENTRE

function test() {
    a;
    test2();

    var a = 1
    function test2() {
        return 3
    }

}

test();

// Funcion de creacion de una lista

let lista = [];

function crearLista(lista) {
    lista.push("A")
    lista.push("B")
    lista.push("C")
    return lista
}

crearLista(lista)

lista

//CLOSURES Y CALLBACKS  