class Persona():
    
    def __init__(self,nombre) -> None:
        self.nombre=nombre
    
    def bienvenida(self):
        self.saludar()

class Argentino(Persona):
    
    def saludar(self):
        self.saludo=print('Hola, como te llamas?')

class Ingles(Persona):
    
    def saludar(self):
        self.saludo=print('Hello, whats your name?')

class Aleman(Persona):
    
    def saludar(self):
        self.saludo=print('Hallo, wie heisen du?')
        

mi_persona=Aleman('Sebastian')

mi_persona.saludar()