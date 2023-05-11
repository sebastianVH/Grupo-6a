//? LISTAS: es un conjunto de datos que se encuentra almacenados en una variable. LLAMAMOS ARRAYS

let lista_compras = Array() //* manera de definir un array. tambien se puede definir con []
lista_compras = ["Pera","Sandia","Melon","Kiwi","Manzana","Uva"]
console.log(lista_compras);

//? acceder a los elementos de un Array a traves de indices. Lios Arrays arrancan a partir del indice 0
console.log(lista_compras[3]); //* El indice se puede acceder mediante colocar un corchete y dentro el numero de indice


//?Metodos de Arrays

//* push() agrega uno o mas elementos al final de nuestro Array. Ej: agreguemos "Banana" a la lista
lista_compras.push("Banana")
console.log(lista_compras);

//* unshift() agrega un elemento al principio de nuestro Array. Agregar "Durazno" a la lista
lista_compras.unshift("Durazno")
console.log(lista_compras);

//* splice() agrega o elimina en un Array un elemento. Pasemos como argumento "Mango"
lista_compras.splice(3,1,"Mango")
//! Argumento 1: indica el indice de inicio
//! Argumento 2: indica la cantidad de elementos a eliminar
//! Argumento 3: indica un elemento que podremos insertar en nuestro Array (ES OPCIONAL)
console.log(lista_compras);

//*shift() eliminar el PRIMER elemento de un array
lista_compras.shift()
console.log(lista_compras);

//*pop() eliminar el elemento DEL FINAL de nuestro Array
lista_compras.pop()
console.log(lista_compras);

//*indexof() nos devuelve el indice donde se encuentra un elemento del Array
let indice = lista_compras.indexOf("Mango")
console.log(indice);

//! si el elemento no se encuentra en el Array, nos devolvera -1 

//*slice() devolver una COPIA de nuestro Array, según los parámetros que le pasemos
let nueva_lista = lista_compras.slice(2,5)
console.log(nueva_lista);

//*join() nos devuelve un array, Transformado en un string. Si no le paso argumentos, estos se separaran por coma
let lista_string = lista_compras.join()
console.log(lista_string);

//*reverse() invierte el orden de un Array. 
//! ATENCION: ESTE METODO MODIFICA EL ARRAY ORIGINAL

console.log(lista_compras);
lista_compras.reverse()
console.log(lista_compras);

//*sort() nos permite ORDENAR EL ARRAY. 

let array_nuevo = ["Sebastian","Rodrigo","Joaquin","Cesar","Mariana","Lucia",3,4,1,12,22,20,30]
array_nuevo.sort()
console.log(array_nuevo);

//* length: nos dice el largo de un array

console.log(array_nuevo.length)

//TODO: CREAR UNA LISTA CON POR LO MENOS 6 ELEMENTOS, y aplicar los metodos sobre ella



