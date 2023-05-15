//? ANIDADOS: los anidados son OBJETOS, QUE DENTRO CONTIENEN OTROS OBJETOS:

//*ej: array que contiene arrays - Objetos que contienen Objetos - Array que contienen objetos y  Objetos que contienen arrays

//? ARRAY CON ARRAY ANIDADOS

//indices primarios:          0                      1                  2                             3
//ind-secundario         0         1             0        1         0          1               0                 1
//ind-terciario                                                                                           0                 1
let array_anidado = [["Seba","Programacion"],["Sofia","Ingles"],["Julieta","Economia"],["Juan Carlos",["Matematicas","Sociologia"]]]

//logs de diferentes indices
//*log de "Julieta"
console.log(array_anidado[2][0]);

//*log de "juan carlos"
console.log(array_anidado[3][0]);

//*log de Sociologia

console.log(array_anidado[3][1][1]);

//? OBJETOS anidado a OBJETOS:

let persona ={
    datos: {
        nombre: "Seba",
        apellido: "Perez"
    }, 
    edad: 35, 
    mascotas: {
        perro: "Firu",
        gata:"Gamora"
    }, 
    ubicacion:{
        pais:"Argentina",
        ciudad: "Bs As"}
    }

//* llamar propiedad a un objeto: BRACKET O DOT NOTATION

//Bracket: utilziamos corchetes y dentro ponemos la propiedad DENTRO DE COMILLAS
persona["edad"]

//dot: utilizamos un punto y seguido la propiedad
persona.edad

//LLAMEMOS AL DATO DE FIRU, MEDIANTE EL ACCESO DE PROPIEDADES con DOT NOTATION

console.log(persona.mascotas.perro);

//LLAMEMOS A ARGENTINA MEDIANTE BRACKET NOTATION

console.log(persona["ubicacion"]["pais"]);

//llamemos a apellido  mediante una combinacion de ambos. Y nombre con la combinacion faltante

console.log(persona.datos["apellido"]);
console.log(persona["datos"].nombre);