const palabras = [];
let palabra;
let letras;
do{
    palabra = (prompt("Introduce palabras y te dire las que son anagrams  (dejelo vacio para finalizar)"));
    palabras.push(palabra)
    letras = palabra.split("").sort().join("");
}   
    while(palabra !=null && palabra!="");


function Anagrama(array){
   
    for(palabra of array){
        if(!mapa.has(palabra)){
            mapa.set(palabra,1);
        }
        else{
            mapa.set(palabra,mapa.get(palabra)+1);
        }
    }
    document.write("<hr>")
    for(let [palabra,numero] of mapa){
        document.write("<b>Palabra:</b> "+palabra+" ---  <b>Repetida:</b> "+numero+" veces<br><hr>");
    }
}
