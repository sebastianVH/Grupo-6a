//TODO: Con un bucle FOR, vamos a recorrer una lista , la cual contiene elementos 

let listado = ["Tijeras","Cuadernos","Biromes","Lapices","Mochilas"]

//? ¿Que metodos podemos utilizar para recorrer esta lista?

//* BUCLE FOR CON INDICES

for (let i = 0; i< listado.length;i++ ){
    console.log(listado[i]);
}


//* bucle for TAMBIEN SE PUEDE UTILIZAR EN RECORRIDOS NUMERICOS!!

for( let i = 1 ; i <= 10; i++){
    console.log("El valor de i:" + i);
}

//TODO: crear una lista de compras: pedimos cantidad de articulos a comprar y luego ingresamos esos articulos AL FINAL
/*
let cant_articulos = prompt("Ingrese la cant de articulos que desea comprar: ")

let art_compras = []

for (let i = 0; i < cant_articulos; i++){
    let art = prompt("Por favor ingrese el articulo a comprar: ")
    art_compras.push(art)
}

let art_string = art_compras.toString()
alert("Los articulos son: "+art_string)*/

//TODO: vamos a ingresar articulos y CANTIDADES a nuestra lista de compras


let lista = [["Harina",2],["Yerba",1],["Azucar",3]] //! ANIDADO
lista.length

let art = "Arroz"
let cant = 2
let art_cant = [art,cant]
lista.push(art_cant)
lista

for (let i = 0; i < lista.length; i++){
    console.log(lista[i]);
    console.log(`Articulo: ${lista[i][0]}  Cantidad: ${lista[i][1]}`);
}







