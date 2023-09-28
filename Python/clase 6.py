#Funciones: es una estructura que tiene como proposito ejecutar un BLOQUE de codigo.

def saludar(nombre:str, anio: int):
    print(f"Hola {nombre}, bienvenido a Python! tu edad es de {anio}")
    
saludar("4",1987)

def calcularPromedio(num1: float, num2:float, num3: float):
    """
    Esta funcion recibe 3 notas y devuelve un promedio
    """
    promedio = f"{(num1+num2+num3)/3}"
    return promedio

calcularPromedio(3,4,5)

def agregarProducto(lista: list):
    producto = input("Ingrese un producto")
    lista.append(producto)
    
def crearAlumno(diccionario: dict):
    diccionario.update()