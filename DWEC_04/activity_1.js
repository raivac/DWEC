let frase = prompt("Escribe una frase para encriptar");

for (let i = 0; i < frase.length; i++) {

    let letra = parseInt(frase.charCodeAt(i));

    if (letra === 122) {
        letra = 98;
    }
    else if (letra === 121) {
        letra = 97;
    }
    else{
        letra+=2;
    }

    let encript = String.fromCharCode(letra);

    if(encript=="\""){

        encript = " ";
    }

    document.write(encript);
}