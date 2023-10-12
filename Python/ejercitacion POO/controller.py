# va a contener FUNCIONES que voy a utilizar dentro de mi programa
# aca aplicamos TODA LA LOGICA
from models import Usuario,Cuenta

usuario1 = Usuario("Seba","seba1234")
usuario2 = Usuario("Joaquin","joaco12")
usuario3 = Usuario("Lore","lorelore123")
usuario4 = Usuario("Rodri","rodriabc123")

database = [usuario1,usuario2,usuario3,usuario4]

#cuenta imaginaria del Usuario.
cuenta = Cuenta(5000)

def login(usuario:str ,contrasenia: str):
    #verificar que exista el usuario y si coincide su contraseña:
    for user in database:
        if user.getNombre() == usuario and user.getPassword() == contrasenia:
                return user
    return False

def agregarDinero(cuenta: Cuenta,monto: int):
    return cuenta.setSaldo(monto)

