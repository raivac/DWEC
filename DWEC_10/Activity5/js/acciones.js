let div = document.getElementById("div");

for (let i = 1; i <= 50; i++) {
    fetch("https:///picsum.photos/300/300?image=" + i+"&blur").then((ev) => {

        //creamos el contenedos junto con la imagen
        let img = document.createElement('img');
        img.setAttribute("src", ev.url);

        //añadimos la imagen al contenedror creado y lo  añadimos al contenedor inicial del html
        div.appendChild(img);

        img.addEventListener("click", () => {

            if (img.className=="blur") {
                img.className="";
            }
            //no se porque no lo vuelve a poner en 0
            else if( img.className=="") {
                console.log("error")
                img.className="blur"
            }
        });
    });
}