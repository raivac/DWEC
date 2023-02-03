var fotos = [];

var div = document.getElementById("div");
fetch("https://randomuser.me/api/?results=1000").then(response => {
    return response.json();
}).then(result => {
    for (let i = 0; i < 1000; i++) {
        let url = result.results[i].picture.large;
        fotos[i] = url;
    }
    let numRand = parseInt(Math.random() * fotos.length);
    for (let i = 0; i < 50; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", fotos[numRand]);
        div.appendChild(img);
    }
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
function urlNuevo(i) {
    let img = document.getElementsByTagName("img")[i - 1];
    let nuevaImg = document.createElement("img");
    let numRand = parseInt(Math.random() * fotos.length);
    nuevaImg.src = fotos[numRand];
    div.replaceChild(nuevaImg, img);
}      
