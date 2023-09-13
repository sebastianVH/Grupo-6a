#Estructuras del tipo TUPLA y LISTA:
#al igual que los arrays, los elementos almacenados dentro una una tupla o lista, seran ordenados por INDICES

#! atencion: HAY UNA DIFERENCIA MUY IMPORTANTE ENTRE LISTAS Y TUPLAS: las tuplas son estructuras INMUTABLES: una vez creadas, las tuplas NO PODRAN CAMBIAR SU TAMAÑO en ningun momento.

#tupla: se crea con PARENTESIS

mis_mascotas = ("Michifuz","Firulais","Roko")

#CAMBIAR el contenido de "michifuz" por "Cachirulo"
#! mis_mascotas[0] = "Cachirulo"  #nos arroja un ERROR! no permite REASIGNAR VALORES 

#Lista: se define de la misma manera que un array.
mis_mascotas= ["Michifuz","Firulais","Roko"]

#en la lista SI PODREMOS ASIGNAR UN ITEM POR POSICION
mis_mascotas[0]= "Cachirulo" #* Esta asignacion funciona perfectamente

#? las listas contienen METODOS para agregar, quitar, items dentro

#*agregar: ademas de asignar por posicion, tambien podremos utilizar un metodo que agregue en la lista un item
#! el append agrega siempre AL FINAL de la lista

mis_mascotas.append("Jazmin") # resultado: mis_mascotas= ["Michifuz","Firulais","Roko","Jazmin"]

#*Quitar items
mis_mascotas.remove("Firulais") #resultado: mis_mascotas= ["Michifuz","Roko","Jazmin"]
mis_mascotas.pop(1) #resultado: mis_mascotas= ["Michifuz","Jazmin"]

#*Borrar la lista completa:
mis_mascotas.clear() #vaciar el contenido de la lista: resultado : mis_mascotas = []

#* insertar datos en POSICIONES de una lista SIN REEMPLAZAR EL CONTENIDO:
lista_compras = ["Arroz","papa","detergente","Mayonesa"] #al lado de la papa, agregar morron

lista_compras.insert(2,"morron") #resultado: lista_compras = ["Arroz","papa","morron","detergente","Mayonesa"]

#? la estructura que representa a un objeto en Python es el DICCIONARIO.

llave = "Edad"
valor = 35

agenda = {"Nombre": "Seba","Ciudad":"Mar del plata", llave : valor, 0: "Sin contenido"}

#! en python, no es soportado el DOT NOTATION en diccionarios. Si podremos utilizar BRACKET NOTATION
agenda["Nombre"] #resultado: "Seba"

#! en python, si ingresamos una llave repetida, LA ULTIMA SERA LA VALIDA
agenda = {"Nombre": "Seba","Ciudad":"Mar del plata", llave : valor, 0: "Sin contenido","Edad":15}
# en esta agenda se eliminaria la variable llava y sera reemplazada por "Edad", ya que tienen EL MISMO VALOR DE LLAVE
agenda["Nombre"] = "Marcos"

#diccionario tambien tiene metodos! tanto como para agregar, editar o eliminar contenido

#*Agregar: podemos agregar una nueva llave con el metodo set default

agenda.setdefault("Empleo","Programador") #me permite ademas, agregar UN VALOR junto con la llave. si existe NO ACTUALIZARA EL VALOR DE LA LLAVE

#*Editar: en la edicion, no solamente pondremos la llave, sino tmb el nuevo valor

agenda.update({"Edad":35}) #actualiza un valor y si no existe, LO CREA. !!!Cuidado!!! Si intentamos usarlo para CREAR en lugar EDITAR, puede que borremos una llave que ya existe, sin darnos cuenta!!!

#*Borrar

agenda.pop("Edad") #borra a traves de una llave. Nos devuelve el valor de la llave borrada
agenda.popitem() #borrar el ultimo contenido. nos devuelve UNA TUPLA, que contiene en la posicion 0 la llave, y en la 1, el valor
agenda.clear() #borrar todo el diccionario


#HOMEWORK: buscar otros metodos que existen en diccionarios y listas