let media = 0;
let cont = 0;
let suma = 0;
let valido = false

let num = prompt("Escriba un numero para hacer la media(0 para detener)");

while (valido === false) {

    if (num === null) {
        valido = true;
        document.write("Ha cancelado el calculo del promedio");
    }
    else if (isNaN(num)) {

        num = prompt(num + " no es un numero, escriba otro(0 para detener)");

    }
    else {
        suma += parseInt(num);
        cont++;
        num = prompt("Escriba un numero para hacer la media(0 para detener)");
    }

    if (num == 0) {
        valido = true;
        media = suma / cont;
        document.write("La media de los numeros introducidos es " + media);
    }
}
