
//array donde se almacenaran las 1000 url
var fotos = [];
//cogemos el div el cual se le iran añadiendo las imagenes
var div = document.getElementById("div");

//cogemos las 1000 urls
fetch("https://randomuser.me/api/?results=1000").then(response => {
    //cuando esten devolvemos e json con estas
    return response.json();
    
}).then(result => {
    //cuando este el json iremos almacenando las urls en el array
    for (let i = 0; i < 1000; i++) {
        let url = result.results[i].picture.large;
        fotos[i] = url;
    }
    //creamos numero random de la largaria del array de lass urls
    let numRand = parseInt(Math.random() * fotos.length);
    //creamos un bucle para crear 50 fotos y añadir a estas las url de forma aleatoria
    for (let i = 0; i < 50; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", fotos[numRand]);
        div.appendChild(img);
    }

    //iremos cambiando las urls de las imagenes 100 veces
    let cont = 0;
    let temp = setInterval(() => {
        if (cont <= 100) {
            for (let i = 1; i <= 50; i++) {
                urlNuevo(i);
            }
            cont++;
        } else {
            clearInterval(temp);
        }
    }, 200);
})


/*************************funcion que actualizara los url****************************/
function urlNuevo(i) {
    //cogemos la 1a imagen
    let img = document.getElementsByTagName("img")[i - 1];
    //creamos una nueva imagen
    let nuevaImg = document.createElement("img");
    //creamos un numero random de la largaria del array donde estan los url
    let numRand = parseInt(Math.random() * fotos.length);
    //reemplazaremos la nueva por la vieja imagen
    nuevaImg.src = fotos[numRand];
    div.replaceChild(nuevaImg, img);
}      
