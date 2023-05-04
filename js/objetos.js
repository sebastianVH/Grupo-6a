//? OBJETOS: tienen una propiedad y valor
let persona = {
    nombre : "Sebastian", //*propiedad : valor
    ciudad : "Mar del Plata",
    edad : 35,
    'estado civil' : 'soltero',
    profesion : [
        "Profesor",
        "Programador web"
        ],
    mascotas : {
        1: "Firulais",
        2: "Gamora",
        animales : "Gatos"
    },
}

console.log(persona);

//? Acceso a las caracteristas de un objeto:

//*dot notation: coloco mi objeto, y con un punto, indico la propiedad
console.log(persona.ciudad);

//*bracket notation: coloco la propiedad de mi objeto entre corchetes
console.log(persona["nombre"]);

//! Cuando usar bracket y cuando usar dot: 

//*si tenemos que consultar al usuario, lo mejor es usar BRACKET NOTATION

let propiedad = "nombre";
console.log(persona[propiedad]);

//*tenemos que mostrar una propiedad que tiene numeros o caracteres

console.log(persona["estado civil"]);
console.log(persona.mascotas["1"]); //* 
console.log(persona["mascotas"]["1"]);

//*uso multiple para un mismo caso: quiero que me devuelva gato

console.log(persona.mascotas.animales);
console.log(persona["mascotas"]["animales"]);
console.log(persona.mascotas["animales"]);
console.log(persona["mascotas"].animales);

//* agregaremos,cambiaremos y quitaremos propiedades en los objetos
persona;

console.log(persona.nombre);

persona.nombre = "Luis"
console.log(persona.nombre);

persona["nombre"] = "Marcos"
console.log(persona.nombre);

let propiedad_a_cambiar = 'estado civil';
persona[propiedad_a_cambiar] = 'Casado'
console.log(persona['estado civil']);

//*crear una propiedad

persona

let nueva_propiedad = "hobbies"
let hobby = "Tocar la guitarra"

persona[nueva_propiedad] = hobby

persona

console.log(persona["hobbies"])

//*eliminar el contenido de una propiedad. SE ELIMINA TODO.

delete persona["estado civil"]
console.log(persona);
console.log(persona["estado civil"])

persona["estado civil"] = "Divorciado"
console.log(persona["estado civil"]);

//*acceso a contenido de una lista en un objeto

console.log(persona.profesion[1]);

//TODO: EJEMPLO LISTA ASIENTOS

let cine = [
    {
        1: "Libre",
        2: "Ocupado",
        3: "Ocupado",
        4: "Libre"
    },
    {
        1: "Ocupado",
        2: "Ocupado",
        3: "Libre",
        4: "Libre"
    },
    {
        1: "Libre",
        2: "Libre",
        3: "Ocupado",
        4: "Libre"
    },
]

//? ¿Como sabemos si mi fila 1, asiento 3, esta libre o no?

console.log(cine[0][3])

//?metodos para ver propiedades y contenido del objeto

//* ver propiedades: 

let propiedades = Object.keys(persona)
console.log(propiedades);

//*ver el contenido

let valores = Object.values(persona)
console.log(valores);

//* evitar cambios de propiedades y contenidos
Object.freeze(persona)
console.log(persona.edad)
persona.edad = 20
console.log(persona.edad)
//persona["hijos"] = 3
console.log(persona.hijos)

//* seal(): evitar que se creen nuevas propiedades, pero ME PERMITE EDITAR SUS CONTENIDOS

Object.seal(persona)
console.log(persona);
persona["hobbies"] = "Futbol"
console.log(persona.hobbies);

//* crear un objeto con las mismas propiedades del otro:

let usuario = Object.create(persona)
console.log(usuario);
usuario.hijos = 3
console.log(usuario.hijos)
console.log(usuario);

let user_2 = Object.assign({},persona)
console.log(user_2);
console.log(user_2.mascotas)

//TODO caso practico

let formulario_base = {
    nombre:null,
    apellido:null,
    dni:null,
    telefono:null,
}

console.log(formulario_base);

let usuario_1 = Object.assign({},formulario_base)
let usuario_2 = Object.assign({},formulario_base)
let usuario_3 = Object.assign({},formulario_base)

console.log(usuario_1);
console.log(usuario_2);
console.log(usuario_3);