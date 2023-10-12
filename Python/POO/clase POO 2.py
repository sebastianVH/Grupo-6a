#Herencia: es la capacidad que tiene una clase, para poder brindarle a clases hijas, sus atributos y METODOS correspondientes:
class Vehiculo():
    def __init__(self,motor: int,marca: str,modelo: str, estado: bool) -> None:
        self.__motor = motor
        self.__marca = marca
        self.__modelo = modelo
        self.__estado_arranque =False
    
    def __str__(self) -> str:
        return f'{self.__marca} {self.__modelo}'
    
    def arrancar(self):
        self.__estado_arranque = not self.__estado_arranque

class Auto(Vehiculo):
    def __init__(self, motor: int, marca: str, modelo: str, estado: bool , baul: int) -> None:
        super().__init__(motor, marca, modelo, estado)
        self.__baul = baul
    
    def __str__(self) -> str:
        return super().__str__()
    
    def cargar(self,cantidad):
        self.__baul = cantidad


auto1 = Auto(1600,"Ford","Falcon",False,200)
auto1.arrancar()
print(auto1)

# class Transformer(Vehiculo):
#     def __init__(self, motor: int, marca: str, modelo: str, estado: bool,faccion) -> None:
#         super().__init__(motor, marca, modelo, estado)
#         self.__faccion = faccion
   
#     def transformar():
#         pass     
        
# optimus = Transformer(5200,"Scania","xxxxx",False,"Autobots")

# print(optimus)
# optimus.transformar()


###--------Polimorfismo---------------

class Persona():
    def __init__(self,nacionalidad) -> None:
        self.__nacionalidad = nacionalidad
        
    def saludar(self):
        return f'{self.saludo}'
        
class Argentino(Persona):
    def __init__(self, nacionalidad) -> None:
        super().__init__(nacionalidad)
        self.saludo = "Hola, como va!"
        
class Ingles(Persona):
    def __init__(self, nacionalidad) -> None:
        super().__init__(nacionalidad)
        self.saludo = "Good morning mate!"
        
class Frances(Persona):
    def __init__(self, nacionalidad) -> None:
        super().__init__(nacionalidad)
        self.saludo = 'Bonjour'
        
argentino_1 = Argentino("Argentina")
print(argentino_1.saludar())
ingles_1 = Ingles("Inglaterra")
print(ingles_1.saludar())