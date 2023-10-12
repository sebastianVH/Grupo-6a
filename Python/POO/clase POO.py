from typing import Any


class Plastilina():
    
    #dentro de la funcion constructura, pasaremos los ARGUMENTOS de creacion
    def __init__(self,animal: str,color: str,tamanio: float,alimento: str,durmiendo: bool = False) -> None:
        # SELF: Hace referencia al OBJETO CREADO. Esta palabra self luego sera reemplazada por el nombre del objeto creado
        self.animal = animal
        self.color = color
        self.tamanio = tamanio
        self.alimento = alimento
        self.durmiendo= durmiendo
        
    
    #es muy importante para poder VISUALIZAR UN OBJETO
    def __str__(self) -> str:
        return f'{self.animal} de color {self.color}'
    
    def alimentar(self) ->str:
        return f'Le diste {self.alimento} para comer a el/la {self.animal}'

    #getters y setters: get es FUNCION que obtiene datos y set es una FUNCION que CAMBIA datos
    
    def getEstado(self) ->str:
        ## Si se encuentra dormida o despierta
        if self.durmiendo == True:
            return f'El/la {self.animal} se encuentra descansando'
        else:
            return f'El/la {self.animal} se encuentra despierto/a'
    
    def setEstado(self) -> str:
        ## despertar o mandar a dormir al animal
        if self.durmiendo == True:
            self.durmiendo = False
        else:
            self.durmiendo = True
        return ''
    
    #__setattr nos permite agregar un ESTADO/ATRIBUTO nuevo a un objeto
    def __setattr__(self, __name: str, __value: Any) -> None:
        super().__setattr__(__name,__value)


gallina = Plastilina("Gallina Bataraza","blanca",0.35,"Maiz")
tortuga = Plastilina("Tortuga de casa","verde",0.60,"Lechuga")
delfin = Plastilina("Delfin en libertad","gris",2.5,"Peces")

# print(gallina.durmiendo)
# print(gallina.getEstado())
# gallina.setEstado()
# print(gallina.durmiendo)
# print(gallina.getEstado())

# gallina.animal = "Gallina Turuleca"
# print(gallina.animal)
# gallina.peso = 50
# print(gallina)

#----- Abstraccion ----> Identificar un objeto con la menor cantidad de caracteriscas posibles ,utilizando las que consideremos FUNDAMENTALES

class User():
    def __init__(self,username,first_name,last_name,address) -> None:
        pass
    


user_1 = User("SebaGlobal2023","Seba","Yacono","Av siempreviva 742")



#----Encapsulamiento ---> Evitar que nuestros atributos sean FACILMENTE ACCESIBLES desde fuera de la clase. Unicamente, deben ser accesibles mediante METODOS que permitan hacerlo.
#¿Como evitamos este acceso? Python nos provee la posibilidad de incluir doble guion bajo por delante de nuestros ATRIBUTOS para evitar que se accedan de manera externa

class Estudiante():
    def __init__(self,nombre,curso,user,password) -> None:
        self.__nombre = nombre
        self.__curso = curso
        self.__user = user
        self.__password = password
    
    def getCurso(self):
        return self.__curso
    
    def setCurso(self,nuevo_curso):
        self.__curso = nuevo_curso
        return self.__curso
        
estudiante_1 = Estudiante("Seba","Programacion","SebaY","SebaSebaY")
estudiante_2 = Estudiante("Joaquin","Ingenieria en Sistemas","JoaquinA","JoaquinJoaquinA")
estudiante_3 = Estudiante("Lorena","Telemarketing y comunicaciones","LoreC","Lorena2023")

# print(estudiante_3.getCurso())

# estudiante_3.setCurso("Programacion")
# print(estudiante_3.getCurso())

#---- Polimorfismo

class Persona():
    def __init__(self,nombre,saludo) -> None:
        self.__nombre = nombre
        self.__saludo = saludo
        pass
    def saludar(self):
        return self.__saludo
    
argentino_1 = Persona("Seba","Buen dia")
argentino_2 = Persona("Miguel","Buen dia")
ingles = Persona("William","Good Morning")
ingles2 = Persona("Michael","Good Morning")
frances = Persona("Antonie","Bonjour")