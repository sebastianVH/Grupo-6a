//Scope - Hoisting - Cola de procesos

//? Funciones declaradas con variables:
//funcion convencional
function saludar(){
    return "Hola mundo!";
}
saludar()

//funcion almacenada en una variable
let saludo = function (){ //esta funcion "sin nombre", se la denomina ANONIMA
    return "Hola mundo :)"
}

saludo()

let sumarNumeros = function(num1,num2){
    return num1+num2
}

sumarNumeros(3,8)

sumarNumeros(6,9)


//? Uso de VAR / declaracion de variables


x = 1; //el valor que contiene "x", vale 1
var a = 5; //declaro una variable "a" y le asigno el valor 5
var b = 10; //declaro una variable "b" y le asigno el valor 10
var c = function (a, b, c) { //declaro que la var "c , contiene dentro una FUNCION
    var x = 10;
    console.log(x); //! 10
    console.log(a); //! 8
    var f = function (a, b, c) { //declaro que la var "f" es una FUNCION
        b = a; // b contiene el valor de a
        console.log(b); //! 8
        b = c; //! 10
        var x = 5; // declaramos x con un valor de 5
    };
    f(a, b, c);
    console.log(b); //! 9 => lo tomamos de la funcion
};
//emepzamos la ejecucion de las funciones
c(8, 9, 10);
console.log(b); //! 9 
console.log(x); //! 1 || 5

// HOISTING => eleva a la cima del archivo, las variables declaradas con VAR (sin su contenido) y las FUNCIONES declaradas

console.log(bar); //Hace un console log de "bar" //! 1 - error - undefined (no definido) => undefined || 1
console.log(baz); // Hace un console log de "baz" //! 2 - error - undefined (no definido) => 2 
foo(); // Invoca a una funcion llamada foo //! imprime o no hola? => sale 
function foo() { //Creo una funcion llamada foo
    console.log('Hola!');
}
var bar = 1; //Declaro una var llamada bar y le asigno el valor 1
baz = 2; // asigno a baz el valor 2

//TODO: ver que devuelve cada una de estas expresiones
6 / "3" =>2
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
7 / 0
{}[0]
parseInt("09")
5 && 2
2 && 5
5 || 0
0 || 5
[3]+[3]-[10]
3>2>1
[] == ![]