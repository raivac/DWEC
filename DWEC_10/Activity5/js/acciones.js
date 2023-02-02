//cogemos el elemento div del html
let div = document.getElementById("div");

for (let i = 1; i <= 50; i++) {
    
    fetch("https:///picsum.photos/300/300?image=" + i).then((ev) => {

        //creamos el contenedos junto con la imagen
        let img = document.createElement('img');
        img.setAttribute("src", ev.url);

        //añadimos la imagen al contenedror creado y lo  añadimos al contenedor inicial del html
        div.appendChild(img);

        //si se hace click sobre la imagen...
        img.addEventListener("click", () => {

            //si la imagen tiene la clase blur le pasamos la url sin el blur y le cambiamos la clase
            if (img.className == "blur") {
                img.className = "";
                img.setAttribute("src", ev.url);
            }
            //si la imagen no tiene la clase blur le pasamos el url con el blur y le cambiamos la clase
            else if (img.className == "") {
                img.className = "blur";
                img.setAttribute("src", "https:///picsum.photos/300/300?image=" + i + "&blur");
                setTimeout( () => {
                    img.setAttribute("src", ev.url);
                }, 604800000);
                //604,800,000 equivale a una semana en milisegundos por lo que en una semana volvera a estar sin blur
                //si se prueba con 5000 o otro mas bajo se ve que funciona
            }
        });
    });
}