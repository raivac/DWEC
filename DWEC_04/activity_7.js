let palindromo = prompt("Escriba una palabra o frase y te dire si es o no un palindromo");

let sinespacios = palindromo.toLowerCase().split(" ").join("");
let reves = sinespacios.split("").reverse().join("");

if (reves === sinespacios) {
    document.write(palindromo + " : Es palindromo");
}
else {
    document.write(palindromo + " : No es palindromo");
}