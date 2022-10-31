//declaramos las variables
const palabras = [];
let palabra;

//bucle que irá pidiendo palabras hasta que se deje vacio
do{
    palabra = (prompt("Introduce palabras y te dire las que son anagrams  (dejelo vacio para finalizar)"));
    palabras.push(palabra);
}   
while(palabra !=null && palabra!="");

//creamos la funcion a la que le pasaremos el array
function Anagrama(array){

    //eliminamos el ultimo elemento que se queda vacio al terminar el bucle del prompt.
    array.pop();
    //declaramos las nuevas variables
    const arrOrd = [];
    let letras;
   /*bucle  que separara los caracteres de cada string , los oredenara y los volvera a juntar,seguidamete lo 
    metera en un nuevo array*/
    for(palabra of array){
        letras = palabra.split("").sort().join("");
        arrOrd.push(letras);
    }
    //bucle que comprobara si se repiten las palabras y contara las veces que se repite
    let cont = 1;
    for (let i = 1; i <= arrOrd.length; i++) {
        if(arrOrd[i-1]===arrOrd[i]){
            cont++;
        }
     }
    /*si las palabras se repiten tanto como palabras tiene el array significara que son todas iguales y devolvera true,
    y si el valor es diferente devolvera false*/
    if(cont==arrOrd.length){
        alert("Las palabras introducidas son anagramas");
        return true;
    }
    else{
        alert("Las palabras introducidas no son anagramas");
        return false;
    }
}

//llamamos a la funcion y le metemos el array.
Anagrama(palabras);