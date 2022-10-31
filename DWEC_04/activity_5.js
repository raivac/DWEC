const minus = "abcdefghijklmnñopqrstuvwxyz";
const mayus = minus.toUpperCase();
const nums = "0123456789";
const minums = minus + nums;
let usu;

do {

    usu = true;
    let usuario = prompt("Introduce un nombre de usuario");
    for (let i = 0; i < usuario.length; i++) {

        if (minums.includes(usuario[i]) == false) {
            usu = false;
        }
    }
} while (usu == false)

let may;
let min;
let num;
let cara;

do {

    may = false;
    min = false;
    num = false;
    cara = false;

    let clave = prompt("Escriba una contraseña");
    for (let i = 0; i < clave.length; i++) {

        if (mayus.includes(clave[i]) == true) {

            may = true;
        }
        else if (minus.includes(clave[i]) == true) {

            min = true;
        }
        else if (nums.includes(clave[i]) == true) {
            num = true;
        }
        else {
            cara = true;
        }
    }

} while (may == false || min == false || num == false || cara == false)