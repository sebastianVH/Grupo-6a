#funciones que se ejecutaran en nuestro programa

def calcularPromedio(a: float,b: float,c: float):
    promedio = (a+b+c)/3
    return promedio

def aprobados(nota: float):
    if nota >= 4:
        estado = "El alumno aprobo"
        return estado
    else:
        estado = "El alumno debe rendir recuperatorio"
        return estado
