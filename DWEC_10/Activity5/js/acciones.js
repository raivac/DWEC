//cogemos el elemento div del html
let div = document.getElementById("div");


//creamos la duracion del blur (1 semana);
let hoy = new Date();
let cadu = hoy.getTime() + 1000 * 60 * 60 * 24 * 7;
let caducidadSemana = new Date(cadu)-hoy;
//creamos la duracion del blur para probar(5segundos);
let cadu5segundos = hoy.getTime() + 1000 * 5;
let caducidadPrueba = new Date(cadu5segundos)-hoy;


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
                setTimeout(() => {
                    img.setAttribute("src", ev.url);
                }, caducidadPrueba);
                //esta puesta la caducidadPrueba para probar que sera de 5 segundos
                //para que dure 1 semana poner caducidadSemana
            }
        });
    });
}