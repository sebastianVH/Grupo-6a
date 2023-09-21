#Recursos UTILES para ejecucion y vista de listas y diccionarios

# #keys,values,items
# formulario = {"nombre":"Sebas","ciudad":"MDQ","edad":36}
# print(formulario.keys())
# print(formulario.values())
# print(formulario.items())
# print()

# #usar .items() y desestructurar la tupla, nos sirve para ITERAR un diccionario
# for llave,valor in formulario.items():
#     print(llave,"--",valor)

# for i,(llave,valor) in enumerate(formulario.items(),1):
#     print(f"{i}) Llave: {llave}, Valor: {valor}")
    
#DESESTRUCTURACION:

# lista = ["Juan","Andres"]
# # persona1 = lista[0]
# # persona2 = lista[1]
# persona1, persona2 = lista
# #print(persona2)

# #*multiples valores

# frutas = ["Banana","Manzana","Kiwi","Melon","Pera","Anana"]
# primer_fruta, *frutas = frutas #el asterisco nos permite almacenar EL RESTO DE ELEMENTOS
# print(frutas)

#Ejercicio integrador:

""" 
En este programa, lo que haremos sera crear nuestra playlist favorita, ingresando los nombres del artista y la cancion. Tendremos la posibilidad de crear una playlist(la cual sera un array) y dentro tendra la cancion y artista como diccionario

"""

playlist = {} #playlist es un objeto: un diccionario en el cual la llave es el nombre de la playlist, y su contenido es una lista que contiene diccionario con nombre artista y cancion
track = {"cancion":None,"artista":None}
opciones = ["Crear Playlist","Ver Playlist","Agregar Canciones","Ver Canciones","Salir"]

print("Bienvenido a nuestro sistema de favoritos!")

while(True):
    print("Seleccione una opcion:")
    for i,op in enumerate(opciones,1):
        print(f'{i}){op}')
    opcion = int(input())

    if opcion == 1:
        nombre_playlist = input("Indique el nombre de la playlist: ")
        playlist[nombre_playlist] = []
        print(f'{nombre_playlist} creada!')
        #crear playlist
    elif opcion == 2:
        for i,pl in enumerate(playlist.keys(),1):
            print(f"{i}- {pl} ")
        #ver playlist
    elif opcion == 3:
        print("Elija la playlist: ")
        for i,pl in enumerate(playlist.keys(),1):
            print(f"{i}- {pl} ")
        pl = input()
        #agregar cancion
    elif opcion == 4:
        #ver canciones
        pass
    elif opcion == 5:
        print("Gracias por usar nuestro sistema")
        break
    else:
        print("Opcion no valida")


