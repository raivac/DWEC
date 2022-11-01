var valido = false;
//bucle que pedirá un número y se repetirá en caso de no ser un número o dejarlo vacio
do{
    var num = prompt("Introduce un numero y te dire su valor de Fibonacci");  
    if(num==undefined){
        valido==true;
    }
    if(isNaN(num)){
        num = parseInt(prompt("Introduce un numero y te dire su valor de Fibonacci"));
        if(num==undefined){
            valido==true;
        }
    }
    else{
        valido = true;
    }
}while(valido==false) 

//continuara con el programa si no se cancela
if(num!=undefined){
    //parseamos el numero dado
    num = parseInt(num);

    /*-----SOLUCION RECURSIVA-----*/
    //creammos la funcion recursiva a la que le pasaremos el valor
    function FibonacciRe(n){

        //si el valor es 0  devolvera 0
        if(n==0){
            return 0;
        }//si el valor es 1  devolvera 1
        if(n==1){
            return 1;
        }
        else{//devolvera el resultado de la suma de esta misma funcion pasandole los dos numeros anteriores al dado
            return FibonacciRe(n-1) + FibonacciRe(n-2);
        } 
    }
    //imprimira el resultado de la funcion recursiva
    document.write("Resultado del valor de Fibonacci de "+num+" de forma recursiva: "+FibonacciRe(num)+"<hr>");


    /*-----SOLUCION NO RECURSIVA-----*/
    //creammos la funcion no recursiva a la que le pasaremos el valor
    function FibonacciNoRe(n){

        //si el valor es menor o igual a 1 devolvera el mismo valor(0 o 1)
        if (n <= 1) return n;

        //declaramos los dos numeros anteriores que son los que se iran sumando y el resultado
        let menos1 = 1;
        let menos2 = 0;
        let res = 0;

        /*bucle que empezara sumando los dos primeros numeros declarados ante(0 y 1), despues igualará el segundo anterior
        con el primero y guardará en el primero el sesultado de la suma, asi hasta terminar el bucle de manera que se iran 
        sumando los dos anteriores*/
        for (let i = 2; i<= n; i++) {
            res = menos1 + menos2;
            menos2 = menos1;
            menos1 = res;
        }//devolvera el resultado
        return res;
    }
    document.write("Resultado del valor de Fibonacci de "+num+" de forma no recursiva: "+FibonacciNoRe(num));
}
else{
    alert("Ha cancelado el programa!");
}