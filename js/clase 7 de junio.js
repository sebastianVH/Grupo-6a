//TODO: ver que devuelve cada una de estas expresiones
6 / "3" // => 2 => conversion de dato: INTENTA CONVERTIR EL DATO STRING A VALOR NUMERICO
"2" * "3" // => 6
4 + 5 + "px" // => 9x
"$" + 4 + 5 //=> //resuelve de izquierda a derecha => "$4"+5 =>"$45"
"4" - 2 // =>  2
"4px" - 2 // NaN => Js intento transformar un String a numero, no pudo, asi que resuelve la ecuacion y devuelve algo no numerico
7 / 0 // => una division con base 0
typeof {}[0]
let variable; // undefined => se que existe, pero no tengo idea del contenido
parseInt("09") // => transformo un string a entero
5 && 2 // => 2 xq devuelve la ultima expresion evaluada, ya que esto es True 
2 && 5 // => 
//0 && 1 // =>

//0 || 5
[3]+[3]-[10]
3>2>1
//[] == ![]

let caja = ["muñeco DBZ","Pelota fulbo"]
let caja2 = caja

console.log(caja2)
console.log(caja)
caja.pop()
console.log(caja)
console.log(caja2)



//? CONVERSION BOOLEANA

/*

True = Hace referencia a expresiones verdaderas
False = Hace referencia a expresiones falsas

!Expresiones que son convertidas a booleano:

Otros datos que se toman como False son los siguientes:
0 => El 0 NUMERICO es considerado un False, PERO NO el 0 tipo string
"" => El string vacio es considerado False
variable vacia (sin contenido) => es considerada False


*/

let prueba = 0 ;

if(prueba){
    "Contiene algo"
}


let calzado = 'Zapatos'
let edad = 17

if (edad >= 18 && calzado === 'Zapatos') {
    "Puedo ingresar al boliche"
}

if (0 || 5 || 0 || 0 || 0){
    "Chekeando"
}