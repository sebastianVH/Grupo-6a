//? BUCLES: 

/* 
En lo bucles, nosotros vamos a tener un BLOQUE DE CODIGO, que se va a estar REPITIENDO,
hasta que ALGUNA CONDICION haga que este finalice
*/

//? BUCLE WHILE: es un bucle el cual EVALUA UNA EXPRESION BOOLEANA para ejecutarse (true o false). VA A EJECUTAR EL BUCLE, SI ES VERDADERA

let numero = 0 //esta variable es para utilizar de SENTENCIA DE EVALUACION en mi bucle

//Entre parentesis la condicion a evualuar
while (numero < 10) {
    console.log(numero);
    numero++ //* con el ++ , le sumo UNA UNIDAD  a mi variable
}

//TODO: me encuentro en un bar con 5 amigos. La mesera, se acerca a preguntarnos, que cerveza vamos a tomar. Va a preguntar a cada uno de nosotros y luego nos dira las cervezas que pedimos

let pedido = 0 //* va a ser mi CONTADOR de pedidos que se vayan haciendo
let lista_cervezas = [] //*guardar mis cervezas
/*
while(pedido < 5){
    let cerveza_pedida = prompt("Ingrese que cerveza desea pedir:")
    lista_cervezas.push(cerveza_pedida)
    pedido++
}
*/
console.log(lista_cervezas);
//TODO ejemplo de while con CONDICION.


let lunas_saturno = 53 //esta variable es la de la respuesta correcta
//let numero_arriesgado; // es mi variable para COMPARAR.
/*
while (numero_arriesgado != lunas_saturno) { //!EVALUO 2 VARIABLES DIFERENTES PARA MI CONDICION.
    numero_arriesgado = prompt(" Adivine la cantidad de lunas: ")
    if (numero_arriesgado > lunas_saturno) {
        alert("Tu numero es mas alto que el de las lunas")
    } else if (numero_arriesgado < lunas_saturno) {
        alert("Tu numero es mas bajo que el de las lunas")
    }
}
alert("Felicitaciones acertaste!!!")
*/

//? BUCLE FOR: se utiliza para ITERAR SOBRE ELEMENTOS LOS CUALES SEAN ITERABLES.

let lista_frutas = ["Banana","Manzana","Pera","Uva","Sandia","Melon"] //lista
let cadena = 'Hola mundo!' //string
let agenda = { nombre: "Seba", edad: 35, mascota: "Gamora"} //objeto

//* bucle FOR

//Argumento 1: ES UNA VARIABLE de inicio, que arranca desde un valor numerico
//argumento 2: es la cantidad de ITERACIONES QUE HARA hasta finalizar
//Argumento 3: variable CONTADO DE INCREMENTO

for (let i = 0; i < lista_frutas.length; i++) {
    console.log(lista_frutas[i])
} //va a ejecutarse , segun un rango de veces que nosotros le indiquemos, y va a utilizar NUMEROS para la iteracion



/*TODO: 
*Crear un bucle WHILE, que recorra de un rango numérico desde el 1 al 10. ASEGURARSE QUE NO ENTRE EN UN BUCLE INFINITO

*Crear un bucle WHILE, que pida al usuario que adivine el numero secreto. El usuario puede ingresar los numeros por la terminal.
este while, debe TERMINAR si el usuario acierta el valor. Sino, se repite de manera infinita

*Crear una lista de animales , com 6 animales, e imprimir por consola, un mensaje que diga "Animal *ej 1* es *nombre_animal*"
*/ 


//* Ejecicio 1)

let contador = 1

while(contador <= 10) {
    console.log(contador);
    contador++
}

//* Ejercicio 2)

let numero_adivinar = 30
let numero_arriesgado //variable DECLARADA pero no INICIALIZADA => la variable existe, pero NO TIENE VALOR
console.log(numero_arriesgado);

/*
while(numero_arriesgado != numero_adivinar){
    numero_arriesgado = prompt("Ingrese el numero a Adivinar!!")
    if (numero_arriesgado < numero_adivinar) {
        alert("El numero arriesgado es MAS BAJO que el numero secreto")
    } else if ( numero_arriesgado > numero_adivinar) {
        alert("El numero arriesgado es MAS ALTO que el numero secreto")
    } else {
        alert(`Acertaste!! El numero secreto era ${numero_adivinar}` )
    }
}
*/

//* ejercicio 3)

//                       0     1        2        3         4        5
let lista_animales = ["Perro","Gato","Leon","Canario","Ballena","Tortuga"]

for(let i = 0;i < lista_animales.length;i++) {
    console.log(`El animal ${i+1} es ${lista_animales[i]}`);
}










//? For in
const objeto = {a: 1, b: 2, c: 3};

for (let propiedad in objeto) {
  console.log(`${propiedad}: ${objeto[propiedad]}`);
}

//?For Of
const letras = ["a", "b", "c"];

for (let letra of letras) {
  console.log(letra);
}

//?For Each
