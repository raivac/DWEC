let nombres = [];
let cont = 0;
let nombre="";

do {
     nombre = prompt("Introduce un nombre(introduce fin para terminar)");
    
    if (nombres.includes(nombre)) {
        alert(nombre+" ya existe!!")
    }
    else {
        nombres[cont] = nombre;
        cont++;
    }

} while (nombre != "fin")

let grupo;