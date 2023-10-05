"""
Crear el cajero automatico: Utilizaran las diferentes funciones clasicas de un cajero automatico:
Tendremos para ver el saldo, depositar, extraer, salir. Como primera instancia, tendremos el VALIDADOR DE CONTRASEÑAS: verificar que la contraseña ingresada del usuario coincida con la registrada dentro de nuestra app. Luego, tendremos el menu de opciones correspondientes.

1) Crear el programa que verifica la contraseña.
2) Crear el programa que nos lleva a las funciones de cajero

Todas nuestras funciones, seran importadas desde el archivo functions.py
"""

""" 
? ¿QUE DEBEMOS TENER EN CUENTA CUANDO MODULARIZEMOS?
1- Debemos INGRESAR DATOS, y luego RECIBIR RESULTADOS. En nuestras funciones debemos evitar al maximo PEDIR DATOS DENTRO.
2- Crear funciones que sean LEGIBLES y los mas DINAMICAS posible.

"""
#este unico user como si fuese mi usuario de base de datos
from functions import validarPassword, consultaSaldo, retirarSaldo

usuario = {"nombre":"Sebastian","password":"seba2023ga","saldo":50000}
lista_opciones = ["Ver Saldo","Retirar","Depositar","Salir"]

def ProgPrincipal():
    print("Bienvenidos a nuestro cajero automatico!")
    while True:
        password = input("Por favor, ingrese su contraseña: ")
        validation = validarPassword(usuario,password)
        if validation == True:
            print(f"Bienvenido nuevamente {usuario['nombre']}")
            break
        else:
            print("Contraseña Incorrecta")
            
    while True:
        print("Seleccione una opcion: ")
        for i,op in enumerate(lista_opciones,1):
            print(f"{i}) {op}")
        opcion = int(input())
        
        if opcion == 1:
            saldo = consultaSaldo(usuario) #recibe todos los datos del usuario para el uso de sus llaves y valores
            print(f"Su saldo actual es de {saldo}")
        elif opcion == 2:
            monto_retirar = int(input("¿Cuanto desea Retirar?")) #10000
            if monto_retirar > usuario["saldo"]:
                print(f"Su saldo es insuficiente para el retiro! Saldo actual: {usuario['saldo']}")
                continue #lo devolvere al PRINCIPIO de mi bucle
            retiro = retirarSaldo(usuario,monto_retirar)
            usuario["saldo"] = retiro
            print(f"Se han retirado {monto_retirar} de su cuenta. Su saldo actual es de {retiro}")
        elif opcion == 3:
            nuevo_saldo = depositarSaldo() 
            print(f"Su nuevo saldo es de {nuevo_saldo}")
        elif opcion == 4:
            print("Gracias por usar nuestro sistema! Hasta pronto")
            break
            
            
            
ProgPrincipal()