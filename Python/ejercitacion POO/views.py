#va a contener la VISTA a generar en el programa
from controller import login,agregarDinero,cuenta
from models import Cuenta


print("Bienvenido a nuestro programa!")
while True:
    usuario = input("Por favor , ingrese su usuario: ")
    contrasenia = input("Por favor, ingrese su contraseña: ")
    respuesta = login(usuario,contrasenia)
    if respuesta:
        print(f"Bienvenido {respuesta} \n")
        break
    else:
        print("Usuario/Contraseña incorrectas")


print("Elija una opcion")
opciones = ["Ver saldo","Ingresar dinero","Retirar dinero","Salir"]

for i,opt in enumerate(opciones,1):
    print(f'{i}) {opt}')

option = int(input("--->"))  

if option == 1:
    print(cuenta)
elif option == 2:
    monto = int(input("Ingrese el monto a ingresar: "))
    nuevo_monto = agregarDinero(cuenta,monto)
    print(f"Su nuevo saldo es de {nuevo_monto}")