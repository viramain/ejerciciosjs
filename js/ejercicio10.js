//EJERCICIO 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = parseInt(window.prompt("Ingrese un numero: "))


if ((numero % 2) == 0) {
    document.write("<br>El numero ingresado divisible por 2")
} else {
    if (numero % 3 == 0) {
        document.write("<br>El numero ingresado divisible por 3")
    } else {
        if (numero % 5 == 0) {
            document.write("<br>El numero ingresado divisible por 5")
        } else {
            if (numero % 7 == 0) {
                document.write("<br>El numero ingresado divisible por 7")
            }
        }
    }
}