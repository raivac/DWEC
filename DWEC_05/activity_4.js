const setWords=new Set();
var arrayWords=[];

//pedira una palabra y si se deja vacio terminará
var word=prompt("Write a word ,or leave it empty if you want to finish");

/*bucle que mientras no se haya dejado vacio meterá las palabras en un set
,mientras no esten repetidas,y voleverá a pedir otra palabra*/
while(word !=null && word!=""){
setWords.add(word);
word=prompt("Write a word ,or leave it empty if you want to finish");
}
/*mete en un array las palabras que se vayan guardando en el set de manera que 
no habrán repetidas*/
arrayWords=[...setWords];

//ordenara las palabras reversamente según el abecedario español
arrayWords.sort((a,b)=>(-a.localeCompare(b,"es")));

//imprimira las palabras del array ordenado del reves
arrayWords.forEach(function(w){
document.write(`<p>${w}</p>`);
})