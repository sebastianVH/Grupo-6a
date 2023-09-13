#Esto es un comentario
"""
Aca comentamos
como si fuese 
un bloque
"""
#* IDENTACION: es el espacio que se le da a las lineas de codigo, para indicar que se encuentran en un contexto de ejecucion

#? Sintaxis de variables:

variable = "Hola mundo"
numero = 1
numero_decimal = 1.5
booleanos = [True, False] #! RECORDAR PONER TRUE O FALSE, CON MAYUSCULA
vacio = None 

#lenguaje DINAMICO, DEBILMENTE TIPADO
nombre = ""

#?MANERA DE NO DECLARAR LAS VARIABLES
# $ = "Hola" 
# hola123 = "mi variable"
# hola_123 = ""
# mi_direccion = ""

#?Metodos de declaracion de variables:
#Utilizaremos snake_case cuando declaremos una variable => mi_edad = 21
#utilizaremos camelCase cuando declaremos el nombre de una funcion => calcularEdad()
#Utilizaremos PascalCase cuando declaremos una clase en P.O.O => SeresHumanos()
""" 
#?Pedido y muestra de datos
nombre = input("Digame su nombre: ")

#mensaje: "Hola *nombre* bienvenido a Python"
#* Separacion por coma
print("Hola",nombre,"bienvenido a Python")

#*Concatenacion de strings
print("Hola "+nombre+" bienvenido a Python")

#*f-String
print(f'Hola {nombre} bienvenido a Python')

"""

#Uso datos: que tipo de datos recibimos? como se comportan los dif tipos de datos entre si?

# edad = input("Diganos su edad: ")
# print(f'Segun mis calculos naciste en el año {2023 - edad}')

#los datos que recibimos por input, son del tipo "str", y no pueden ser utilizados para OPERACIONES MATEMATICAS

#*Conversion de datos
#A tipo numerico:
int("3")
float("3.15")

# edad = int(input("Diganos su edad: "))
# print(f'Segun mis calculos naciste en el año {2023 - edad}')

print(f"Persona{1}: juan, persona2: Miguel")

#homework: Ingresaran 4 input distintos: cada uno preguntara algo diferente: nombre, ciudad, fecha nacimiento y mascota. La respuesta de cada input se guardara en una variable. Luego, con los datos de esos input, crearan la siguiente frase para imprimir por consola: "Hola *nombre*, Bienvenido a Python. Que linda ciudad es *ciudad*. Tu edad es de *edad*, espero que tu mascota *nombre_mascota* se encuentre bien!!!"