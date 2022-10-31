const palabras = [];
let palabra;
let letras;
do{
    palabra = (prompt("Introduce palabras y te dire las que son anagrams  (dejelo vacio para finalizar)"));
    palabras.push(palabra)
    letras = palabra.split("").sort().join("");
}   
    while(palabra !=null && palabra!="");

    //bucle que irá pidiendo palabras hasta que se deje vacio
while(palabra !=null && palabra!=""){
    palabras.push(palabra);
    palabra=prompt("Write a word ,or leave it empty if you want to finish");
}

//declaramos la fucion y le pasamos el array
function RellenaMapa(array){
    /*bucle que irá recorriendo el array y en caso de no estar la palabra la añadira  y se le añadira un 1,
     por el contrario si esta ya la palabra en el mapa cogera el valor y se le sumara 1*/
    for(palabra of array){
        if(!mapa.has(palabra)){
            mapa.set(palabra,1);
        }
        else{
            mapa.set(palabra,mapa.get(palabra)+1);
        }
    }
    document.write("<hr>")
    //bucle que recorrera el mapa mostrandolo en pantalla
    for(let [palabra,numero] of mapa){
        document.write("<b>Palabra:</b> "+palabra+" ---  <b>Repetida:</b> "+numero+" veces<br><hr>");
    }
}

//llamamos a la función y le pasamos el array de palabras
RellenaMapa(palabras);