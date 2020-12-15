//EJERCICIO7:  Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(window.prompt("Ingrese Primer numero: "));
let numero2 = parseInt(window.prompt("Ingrese Segundo numero: "));
let numero3 = parseInt(window.prompt("Ingrese Tercer numero: "));

if (numero1 > numero2) {
    if (numero1 > numero3) {
        document.write("El numero mayor es primero: " + numero1);
    }
} else {
    if (numero2 > numero3) {
        document.write("El numero mayor es el segundo: " + numero2);
    } else {
        document.write("El numero mayor es el tercero: " + numero3);
    }
}