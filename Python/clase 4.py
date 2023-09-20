#bucle FOR, trabajando a traves de RANGOS NUMERICOS

# 

# for fruta in frutas:
#     print(fruta) 

#* Usaremos el RANGE, como un parametro para repetir un bucle, una cantidad de veces dada

""" 
1er parametro: indice de inicio
2do parametro: indice de frenado en el recorrido (CANT DE EJECUCIONES DESDE EL VALOR 0)
3er parametro: saltos de indices (PUEDEN IR EN AMBAS DIRECCIONES)
"""

frutas = ["Banana","Manzana","Pera","Uva",'sandia', 'frutilla', 'melon', 'pomelo', 'naranja', 'anana']

# for i in range(10):
#     fruta = input("Ingrese una fruta:")
#     frutas.append(fruta)
    
# print(frutas)

#*ENUMERACION de mis items

# enumerador = 1
# for i in frutas:
#     print(f'{enumerador}) {i}')
#     enumerador += 1

# for i in range(len(frutas)):
#     print(f"{i+1}) {frutas[i]}")
    
# for i,fruta in enumerate(frutas,1):
#     print(f"{i}) {fruta}")
    
#VEamos el menu de un cajero: en el menu, tenemos las opciones de: "Retirar Efectivo","Ingresar Efectivo","Transferecias","Saldos","Cambiar clave","Salir"

# opciones = ["Retirar Efectivo","Ingresar Efectivo","Transferecias","Saldos","Cambiar clave","Salir","Solicitar tarjeta"]

# print("Elija una opcion:")
# for i,op in enumerate(opciones,1):
#     print(f"{i}){op}")

#Crear un programa que permita al usuario, ingresar items a su lista de compras, poder visualizar los items de la lista, y ademas, poder ELIMINAR un item

lista_compras = ["Banana","Manzana","Pera","Uva",'sandia', 'frutilla', 'melon', 'pomelo', 'naranja', 'anana'] #almacenar los items que ingrese el usuario
lista_opciones = ["Cargar producto","Eliminar producto","Ver mis productos","Salir"]

print("Bienvenidos a nuestro programa!!")
opcion = None

while (opcion != 4):
    print()
    print("Que opcion desea ejecutar?")
    for i,op in enumerate(lista_opciones,1):  
        print(f"{i}){op}")
        
    opcion = int(input("Seleccione: "))
    if opcion == 1:
        producto = input("Ingrese el producto a cargar:")
        lista_compras.append(producto)
        pass
    elif opcion == 2:
        #eliminar
        for i,pr in enumerate(lista_compras,1):
            print(f"{i}: {pr}")
        item = int(input("Indique el item a eliminar: "))
        lista_compras.pop(item-1)
        pass
    elif opcion == 3:
        #ver productos
        for i,pr in enumerate(lista_compras,1):
            print(f"{i}: {pr}")
        pass
    elif opcion == 4:
        print("Gracias por usar nuestro programa")
        pass
    else:
        print("Opcion incorrecta")
    
