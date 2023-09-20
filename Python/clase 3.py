#* condicionales: NO USAN LLAVES PARA DEFINIR EL CONTENIDO DEL CONDICIONAL. Ademas, las condiciones a evaluar no sera necesaria ponerlas entre parentesis.

edad = 18

#si mi edad, es mayor o igual a 18, que ponga un print que diga "Es mayor de edad"

# if edad >= 18: #! poner los dos puntos! esto creara el CONTEXTO DE EJECUCION
#     print("Es mayor de edad") #! NO OLVIDAR EL IDENTADO

# if edad >= 18:
#     print("Es mayor de edad")
# elif edad <= 18:
#     print("Es menor de edad")
# else:
#     print("Ingrese una edad")
    
"""
EQUIVALENTE EN JS:
if (edad >= 18) {
 console.log("Es mayor de edad")   
} else if (edad < 18) {
  Es menor de edad  
}
"""

#! Bucles

# un programa para que adivine cual es el numero secreto: le va a preguntar al usuario cual es el numero que desea arriesgar. segun la respuesta del usuario, mostrara si su eleccion fue mayor al numero secreto, menor o si acerto. Cada vez que falle, le sumaremos a un contador de intentos, una unidad. Una vez que el usuario acierte, le mostraremos ademas en cuantos intentos lo consiguio

numero_secreto = 12
numero_arriesgado = 0
contador_intentos = 1

# while numero_arriesgado != numero_secreto:
#     numero_arriesgado = int(input("Ingrese el numero a arriesgar: "))
#     if numero_arriesgado > numero_secreto:
#         print("El numero secreto es MENOR al arriesgado")
#         contador_intentos += 1 #contador++ => contador_intentos = contador_intentos + 1
#     elif numero_arriesgado < numero_secreto:
#         print("El numero secreto es MAYOR al arriesgado")
#         contador_intentos += 1 #contador++
#     else:
#         print(f"Acertaste!!! Te tomo {contador_intentos} intento/s adivinar el numero")

#! TAMBIEN EXISTE EL BREAK EN PYTHON! Ademas, tendremos una herramienta que se llama continue. Esta palabra reservada, hara que el bucle VUELVA AL INICIO

contador = 0

# while True:
#     opcion = int(input("Elija una opcion: "))
#     if opcion == 1:
#         print("Salgamos del bucle")
#         break #rompe el codigo
#     elif opcion == 2:
#         print("Volvamos al principio")
#         continue #vuelva al principio
# print(contador)

#? For

lista_alumnos = ["Seba","Rodri","Lore","Joaquin"]

""" 
recorrido con Js

for(let i=0; i<lista_alumnos.length;i++){
    console.log(lista_alumnos[i])
}

lista_alumnos.forEach (alumno => console.log(alumno))

"""
for alumno in lista_alumnos:
    print(alumno)

letras = "abcdefraulg"

if "raul" in letras:
    print("Esta presente")
    
#for i in range() # enumerate