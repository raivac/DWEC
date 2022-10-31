var mensaje = prompt("Escribe un mnensaje");
var clave = prompt("Dime una clave");
var cont = 0;
var encript="";
var letra;
var sum;

for (let i = 0; i < mensaje.length; i++) {

    letra = parseInt(mensaje.charCodeAt(i));
    sum = parseInt(clave.charAt(cont));
    console.log(letra);
    console.log(sum);
    letra += sum;
    cont++;

    if (cont == clave.length) {
        cont = 0;
    }

    encript = String.fromCodePoint(letra);
    document.write(encript);
   
} 