
const lista = ["hola",5, "asa",7,"Andres", "abedul", 87, "holaloh", 3, "Antena", 6, 4, "arbol" ,"pep",0 ,4,"raul",88,"jose"];

Filtro1(lista,Filtro1);

Filtro2(lista,Filtro2);

Filtro3(lista,Filtro3);

Filtro4(lista,Filtro4);

/*--------------FUNCION 1-------------*/
//la prime ra funcion devolverá solo las palabras
function Filtro1(array, funcion) {

    document.write("<br><b>FILTRO 1 Solo palabras:</b> <br><br>")

    //al decir que tiene largaria devolvera solo strings
    const arrayFiltrado=array.filter(x => x.length);
    arrayFiltrado.forEach(function(e,i) {
        
        document.write("nº "+ (i+1) + ":  "+ e+"<br>");
      });
    document.write("<hr>")
}

/*--------------FUNCION 2-------------*/
//la segunda funcion devolvera solo los numeros
function Filtro2(array, funcion) {
    
    document.write("<br><b>FILTRO 2 Solo numeros:</b> <br><br>")
    //filtraremos los numeros mayores o iuguales a 0 para que devuelva solo numeros
    const arrayFiltrado=array.filter(x => x>=0);
    arrayFiltrado.forEach(function(e,i) {
        document.write("nº "+ (i+1) + ":  "+ e+"<br>");
      });
    document.write("<hr>")
}

/*--------------FUNCION 3-------------*/
//la tercera funcion devolvera solo los numeros superiores a 10
function Filtro3(array, funcion) {
    
    document.write("<br><b>FILTRO 3 Numeros mayores de 10:</b> <br><br>")
    //filtraremos los numeros mayores a 10
    const arrayFiltrado=array.filter(x => x>10);
    arrayFiltrado.forEach(function(e,i) {
        document.write("nº "+ (i+1) + ":  "+ e+"<br>");
      });
    document.write("<hr>")
}

/*--------------FUNCION 4-------------*/
//la cuarta funcion devolvera solo las palabras que empiecen por la letra a
function Filtro4(array, funcion) {
    
    document.write("<br><b>FILTRO 4 Solo palabras que que empiezan por A:</b>  <br><br>")
    //filtraremos el contenido comprobado si el primer caracter es a o A.
    const arrayFiltrado=array.filter(x => x[0]=='a'|| x[0]=='A');
    arrayFiltrado.forEach(function(e,i) {
        document.write("nº "+ (i+1) + ":  "+ e+"<br>");
      });
    document.write("<hr>")
}