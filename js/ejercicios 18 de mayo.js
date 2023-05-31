//? Simulacion de un cajero automatico:

/*
nuestro programa simulara el funcionamiento de un cajero automatico:
lo primero que hara sera preguntarnos nuestra clave. (vamos a crear una clave en una variable, con algun numero).
Una vez que ingresemos la clave SI ES INCORRECTA, mostrara el mensaje de "Clave incorrecta. Intente nuevamente". si ocurre esto, debe volver
a pedir la clave. Este programa se ejecutara MIENTRAS QUE nuestra clave no sea la correcta.

Luego de pasar la clave correctamente. El programa mostrara un menu con 4 opciones:
1) Deposito , 2) Retiro, 3) Consulta de Saldo , 4) Salir

Comenzaremos con un saldo inicial de 15000.

en mi opcion numero 1, debe preguntarme "cuanto desea depositar" y luego, cargar ese saldo a la cuenta. Al finalizar la carga, nos dira 
cual es nuestro nuevo saldo.

la opcion 2, debe preguntar cuanto deseo retirar. SI  mi monto de retiro es MAYOR que mi saldo, me mostrara un mensaje diciendo "Excede el limite de retiro. su saldo es de *nuestro saldo*". Si se ingresa un importe correcto, debe descontar ese saldo de nuestra cuenta y decirnos con un mensaje "Extraccin finalizada"

la opcion 3, solo nos mostrara un mensaje, de nuestro saldo actual

la opcion 4, saldra del programa, y antes de eso nos dira con un mensaje "Gracias por usar nuestro sistema"

Todo este programa DEBE REPETIRSE MIENTRAS QUE LA OPCION NO SEA LA NUMERO 4!!!
*/

//? armado del programa:

//* creacion del programa para la clave

let clave_usuario = 6478
let clave_ingresada;

//* verifico la clave de usuario para dejarlo continuar o no
while (clave_usuario != clave_ingresada) {
    clave_ingresada = prompt("Ingrese la clave: ")
    if (clave_ingresada == clave_usuario) {
        alert("Acceso concedido. Bienvenido")
    } else {
        alert("Clave incorrecta. Intente nuevamente")
    }
}

//* menu de usuario

let saldo = 15000 //*esto es mi saldo inicial

//? WHILE TRUE: es un bucle que SIEMPRE SE considera VERDADERO. eL UNICO modo de finalizarlo es con un BREAK
while (true) {
    //* Pedir que me elija una opcion
    let opcion = prompt("Elija una opcion:\n1) Deposito \n2) Retiro \n3) Consulta de Saldo  \n4) Salir")

    if (opcion == 1) {
        let monto_deposito = prompt("Ingrese el monto a depositar: ")
        saldo = saldo + parseInt(monto_deposito) //! recordemos TRANSFORMAR LOS STRING A NUMEROS, SI VAMOS A SUMARLOS
        alert(`Su nuevo saldo es de ${saldo}` ) 
        } 
        else if (opcion == 2) {
        let monto_retiro = prompt("Ingrese el monto a retirar: ")
        if (saldo < monto_retiro) { //* chequeo que mi saldo no sea mas bajo que mi retiro
            alert("Excede el limite de retiro. Su saldo es de " + saldo)
        } else {
            saldo = saldo - monto_retiro
            alert("Extraccion finalizada.")
        }
        }
        else if (opcion == 3){
        alert("Su saldo es de "+saldo)
        }
        else if (opcion == 4 ){
        alert("Gracias por usar nuestro sistema.")
        break //! puedo usar este break PARA SALIR DE MI BUCLE!
        }
        else {
        alert("Opcion incorrecta. Intente nuevamente")
        }
    }

/* 
TODO: vamos a crear un programa similar al del cajero, solo que sera con un stock de ventas de zapatillas
? El programa pedira al usuario que se loguee con su legajo. Si ingresa unlegajo equivocado, mostrara el mensaje "Usuario no valido" Esto se repetira MIENTRAS QUE el legajo no sea el correcto (RECUERDEN CREAR UNA VARIABLE LEGAJO para comparar. Ingresen cualquier numero como legajo)

El programa luego continua de la siguiente manera:

Mostrara el menu del sistema: dara 4 opciones: 
1) Venta
2) Cargar Stock
3) Ver stock disponible
4) Salir

empezaremos con un stock inicial de 100

la opcion 1, debe preguntar cuantas unidades desea vender. Si la venta es mayor al stock, mostrar un cartel que diga "No cuenta con stock suficiente." Sino, realizar la correspondiente operacion de descontar del stock , la venta realizada

la opt 2, nos cargara stock. Debemos mostrar un mensaje que diga "Ingrese el stock para cargar: ", y ese numero debe sumarse a mi stock de articulos

la opt numero 3, mostrara en pantalla un mensaje con el stock que tenemos en nuestro inventario

la opt 4, saldra del sistema, diciendo un mensaje de despedida

! TODO ESTE PROGRAMA DEBE REPETIRSE MIENTRAS LA OPCION NO SEA LA NUMERO 4

*/