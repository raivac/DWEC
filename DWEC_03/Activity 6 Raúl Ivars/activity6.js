let rand = parseInt(Math.random() * 100 + 1);
let num = prompt("Dime un numero entre 1 y 100");
let cont = 0;
while (num != rand) {
    if (isNaN(num)) {
        alert("Numero no valido");
        num = prompt("Dime un numero entre 1 y 100");
    } else if (num < rand) {
        alert("El numero es mayor");
        num = prompt("Dime un numero entre 1 y 100");
        cont++;
    } else if (num > rand) {
        alert("El numero es menor");
        num = prompt("Dime un numero entre 1 y 100");
        cont++;
    }
}
alert("Correcto!!\n\nNumero de intentos: " + (cont + 1));