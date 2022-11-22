
/******************************** FECHA 1 ********************************/
var valido = false;

do{
    //pedimos al usuario la fecha con un formato determinado
    let fecha = prompt("Escribe la primera fecha de la siguente manera dd/mm/yy");

    //sepraramos la fecha por / para seprarar por dias meses y años, y tambien para comprobar si la largaria de estos es correcta
    var fechaSeparada = fecha.split("/");

    //comprobamos la largiaria del primer formato para evitar fallos a la hora de comprovar
    if(fecha.length == 8){

        //comprobamos la largaria del dia, del mes, y del año y damos el visto bueno
        if(fechaSeparada[0].length==2 && fechaSeparada[1].length==2 && fechaSeparada[2].length==2){
        
            valido = true;
            var fecha1 = new Date(fechaSeparada[2],fechaSeparada[1],fechaSeparada[0])
        }
        else{
            alert("fecha incorreca");
        }
    }
}
while(valido == false);

/******************************** FECHA 2 ********************************/

var valido2 = false;

do{
    //pedimos al usuario la fecha con un formato determinado
    let fecha = prompt("Escribe la segunda fecha de la siguente manera dd/mm/yy");

    //sepraramos la fecha por / para seprarar por dias meses y años, y tambien para comprobar si la largaria de estos es correcta
    var fechaSeparada2 = fecha.split("/");

    //comprobamos la largiaria del primer formato para evitar fallos a la hora de comprovar
    if(fecha.length == 8){

        //comprobamos la largaria del dia, del mes, y del año y damos el visto bueno
        if(fechaSeparada2[0].length==2 && fechaSeparada2[1].length==2 && fechaSeparada2[2].length==2){
        
            valido2 = true;
            var fecha2 = new Date(fechaSeparada2[2],fechaSeparada2[1],fechaSeparada2[0])
        }
        else{
            alert("fecha incorreca");
        }
    }
}
while(valido2 == false);

/*******************************************************************/
//mostramos las fechas por pantalla
document.write("Fecha 1: "+fecha1.toLocaleDateString());
document.write("<br>Fecha 2: "+fecha2.toLocaleDateString());
//sacaremos la diferencia en milisegundos de ambas fechas y lo convertiremos a dias.
let diferencia = Math.abs(parseInt(fecha1.getTime()-fecha2.getTime()));
diferencia /= (3600000*24);
document.write("<br>La diferencia entre ambas fechas es de " + diferencia + " dias");