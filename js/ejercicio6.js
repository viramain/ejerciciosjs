// EJERCICIO6: Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.


let numero1 = parseInt(window.prompt("Ingrese Primer numero: "));
let numero2 = parseInt(window.prompt("Ingrese Segundo numero: "));

if (numero1 > numero2) {
    document.write("El numero mayor es " + numero1);
} else {
    document.write("El numero mayor es " + numero2);
}