//pedimos la palabra/frase
let palindromo = prompt("Escriba una palabra o frase y te dire si es o no un palindromo");

//creamos la  funcion y le pasamos el string
function Palindromo(string){
    if(palindromo!=undefined){
        /*convertimos el string en minusculas, lo separamos con espacios y lo juntamos para quitar 
        los espacios en espacios*/
        var sinespacios = string.toLowerCase().split(" ").join("");

        //creamos otro string copiandolo inversamente
        var reves = sinespacios.split("").reverse().join("");
        
        //si son iguales los strings devolvera true, en caso contrario devolvera false
        if (reves === sinespacios) {
         document.write(string + " : Es un palindromo");
         return true
        } 
        else {
            document.write(string + " : No es un palindromo");
         return false
        }
    }
    else{
        alert("Ha cancelado el programa");
    }
}
//llamamos a la funcion y le pasamos el string
Palindromo(palindromo);