//? bucles FOR  en arrays y objetos


//*For-each: recorre CADA elemento de un array,  y aplica alguna FUNCION sobre este

let array_frutas = ["Banana","Manzana","Pera","Uva"]

array_frutas.forEach(fruta => {
    console.log(fruta + " Debo comprar 1kg");
})

console.log(array_frutas);

//*For-in: el forIn, nos sirve para recorrer las propiedades encontradas en nuestros objetos

const datos = {nombre: "Seba", edad: 35, carrera: "Desarrollador FullStack", hobbies:["Cantar","Jugar Juegos en linea","Leer","Tomar mate"]};

console.log(datos["edad"])

for (let propiedad in datos ){
    console.log(propiedad); //mostramos como se llama la propiedad
    console.log(datos[propiedad]);//mostrar cual es el valor de nuestra propiedad
}

//*For-of: podemos recorrer un array o un STRING

const diccionario = ["a", "b", "c","d","e","f"];
const palabra = "Global Academy"

for (let letra of palabra) {
    console.log(letra);
}

for (let hobby of datos.hobbies){
    console.log("Al profe Seba le gusta "+hobby);
}

