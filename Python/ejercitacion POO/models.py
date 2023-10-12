#Modelos va a contener las Clases que vayamos a utilizar

class Usuario():
    """ Creacion de un Usuario"""
    def __init__(self,nombre: str,password: str) -> None:
        self.__nombre = nombre
        self.__password = password
    
    def __str__(self) -> str:
        return f'{self.__nombre}'
    
    def getNombre(self):
        return self.__nombre
    
    def getPassword(self):
        return self.__password
    
class Cuenta():
    def __init__(self,saldo) -> None:
        self.__saldo = saldo
    
    def __str__(self):
        return f'Su saldo es de {self.__saldo}'
    
    def getSaldo(self):
        return self.__saldo

    def setSaldo(self, monto):
        self.__saldo += monto
        return self.__saldo
    
    def retirarSaldo(self,monto):
        self.__saldo -= monto
        return self.__saldo
