#def para validar una contraseña

def validarPassword(usuario: dict, password: str):
    if usuario["password"] == password:
        return True
    else:
        return False

def consultaSaldo(usuario: dict):
    return usuario["saldo"]

def retirarSaldo(usuario: dict, retiro: int):
    nuevo_saldo = usuario["saldo"] - retiro
    return nuevo_saldo