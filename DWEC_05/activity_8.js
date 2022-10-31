//declaramos las variables
const palabras = [];
let palabra;

//bucle que irá pidiendo palabras hasta que se deje vacio
do{
    palabra = (prompt("Introduce palabras y te dire las que son anagrams  (dejelo vacio para finalizar)"));
    palabras.push(palabra);
}   
while(palabra !=null && palabra!="");

function Anagrama(array){
   const arrOrd = [];
   let letras;
    for(palabra of array){
        letras = palabra.split("").sort().join("");
        arrOrd.push(letras);
    }

    //eliminara el ultimo elemento que se queda vacio al terminar el bucle del prompt.
    arrOrd.pop();
    console.log(arrOrd);



    let cont = 0;
    for (let i = 1; i <= arrOrd.length; i++) {
        if(arrOrd[i-1]===arrOrd[i]){
            cont++;
        }
     }
     
    if(cont==arrOrd.length+1){
        alert("Las palabras introducidas son anagramas");
        return true;
    }
    else{
        alert("Las palabras introducidas no son anagramas");
        return false;
    }
}
Anagrama(palabras);