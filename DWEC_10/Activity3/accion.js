async function mostrarMapa() {

    let elemento = document.querySelector("main");
    let form = elemento.querySelector("form");

    var head = new Headers({
        "cache-control": "no-cache",
    });

    var apikey = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXVsaXZhcnMxOTk3QGdtYWlsLmNvbSIsImp0aSI6IjBhNTg4OWU1LThiMmQtNGM0NS1hOTIwLTI1YTQwMjA1ZmU4ZiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNjczODk0NDAzLCJ1c2VySWQiOiIwYTU4ODllNS04YjJkLTRjNDUtYTkyMC0yNWE0MDIwNWZlOGYiLCJyb2xlIjoiIn0.cHc3uqlSfh-QOkgRrfAVSgmxkVqnwWcsaSmrRmNIBqk";

    var conf = {
        method: "GET",
        mode: "cors",
        headers: head,
    }


    try {
        const resp1 = await fetch("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=" + apikey, conf);
        console.log("https://opendata.aemet.es/opendata/api/mapasygraficos/analisis?api_key=" + apikey);

        const data1 = await resp1.json();
        const resp2 = await fetch(data1.datos, conf);
        const mapa = await resp2.blob();
        const img = document.createElement("img");
        img.setAttribute("src", URL.createObjectURL(mapa));
        elemento.removeChild(form);
        elemento.appendChild(img);
    }
    catch (error) {
        let p = document.createElement("p");
        p.innerHTML = '<strong>Error al cargar  el mapa: </strong>' + error;
        elemento.appendChild(p)
        console.log(error)

    }
}

document.querySelector('form').addEventListener('submit',ev => {
    ev.preventDefault()
})