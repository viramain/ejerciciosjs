// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substr. (developer mozilla)


let frase = window.prompt("Ingrese una Frase: ");

let longitud = frase.length;
document.write("<br>La Frase es: " + frase);

let letra = " ";
let a = 0;
let b = 1;

while (a <= longitud) {
    letra = frase.substring(a, b);

    if (letra == "a") {
        document.write("<br>La Vocal es " + letra);
    }
    if (letra == "e") {
        document.write("<br>La Vocal es " + letra);
    }
    if (letra == "i") {
        document.write("<br>La Vocal es " + letra);
    }
    if (letra == "o") {
        document.write("<br>La Vocal es " + letra);
    }
    if (letra == "u") {
        document.write("<br>La Vocal es " + letra);
    }
    a++;
    b++;
}