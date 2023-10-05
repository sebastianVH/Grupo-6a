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

    #getters y setters: FUNCION que obtiene datos y una FUNCION que CAMBIA datos
    
    def getEstado(self) ->str:
        ## Si se encuentra dormida o despierta
        return ''
        pass
    
    def setEstado(self) -> str:
        ## despertar o mandar a dormir al animal
        return ''
        pass

gallina = Plastilina("Gallina Bataraza","blanca",0.35,"Maiz")
tortuga = Plastilina("Tortuga de casa","verde",0.60,"Lechuga")
delfin = Plastilina("Delfin en libertad","gris",2.5,"Peces")

print(f"usted tiene estos animalitos:{gallina},{tortuga},{delfin}")

print(gallina.alimentar())
print(tortuga.alimentar())
print(delfin.alimentar())
print(gallina.durmiendo)

