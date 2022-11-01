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
    function FibonacciNoRe(n){
        
    }
    document.write("Resultado del valor de Fibonacci de "+num+" de forma no recursiva: "+FibonacciNoRe(num));
}
else{
    alert("Ha cancelado el programa!");
}