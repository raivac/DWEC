
//creamos la fecha actual y la mostramos por pantalla formateada
const tiempo = Date.now();
const fecha = new Date(tiempo);
document.write("Fecha actual: "+fecha.toDateString()+"<br>");


//comprobamos si es de lunes a viernes y esta entre las 9:00 y las 14:00
if(!fecha.getDay()== 0 && !fecha.getDay()== 6 && fecha.getHours()>=9 || fecha.getHours()<=14){
    //si se cumple
    document.write("Bienvenido!!")
}
else{
    //si no se cumple
    document.write("Pagina cerrada, vuelve de Lunes a Viernes de 9:00 a 14:00");
}
