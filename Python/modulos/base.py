#este archivo contendra el CODIGO DE EJECUCION de nuestro programa

#from *nombre del archivo* import *nombre de la funcion*
#from funciones import calcularPromedio,aprobados

#para importar de manera general, colocamos el * en lugar del nombre de la funcion
from funciones import calcularPromedio,aprobados

#podemos importar el modulo completo, e ir utilizando sus funciones
#import funciones as fn

nota1 = float(input("Ingrese la primer nota: "))
nota2 = float(input("Ingrese la segunda nota: "))
nota3 = float(input("Ingrese la tercer nota: "))

prom = calcularPromedio(nota1,nota2,nota3)
print(f'Su promedio fue de {prom}' )
estado = aprobados(prom)
print(estado)

