var valido = false;
//bucle que pedirá un número y se repetirá en caso de no ser un número o dejarlo vacio
do{
    var num = prompt("Introduce un numero y te dire su valor de Tribonacci");  
    if(num==undefined){
        valido==true;
    }
    if(isNaN(num)){
        num = parseInt(prompt("Introduce un numero y te dire su valor de Tribonacci"));
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
    function TribonacciRe(n){
        //si el valor es menor que 0 devolvera 0
        if(n==0){
            return 0;
        }//si el valor es 1 o 2 devolvera 1
        if(n==1 || n==2){
            return 1;
        }
        else{//cuando el valor sea 3 o mayor que este,devolvera el resultado de la suma de esta misma funcion pasandole los tres numeros anteriores al dado
            return TribonacciRe(n-1) + TribonacciRe(n-2) + TribonacciRe(n-3)
        }
    }
    //imprimira el resultado de la funcion recursiva
    document.write("Resultado del valor de Tribonacci de "+num+" de forma recursiva: "+TribonacciRe(num)+"<hr>");


    /*-----SOLUCION NO RECURSIVA-----*/
    function TribonacciNoRe(n){
   
        //si el valor es menor que 0 devolvera 0
        if(n==0){
            return 0;
        }//si el valor es 1 o 2 devolvera 1
        if(n==1 || n==2){
            return 1;
        }
        //declaramos los dos numeros anteriores que son los que se iran sumando y el resultado
        let menos1 = 1;
        let menos2 = 1;
        let res = 0;
        //bucle que ira sumando los tres numeros anteriores hasta llegar el valor dado.
        for (let i = 0; i<n; i++) {
            var temp = menos2
            menos2 =  res + menos1 + menos2;
            res = menos1;
            menos1 = temp;
        }//devolvera el resultado
        return res;
    }    
    document.write("Resultado del valor de Tribonacci de "+num+" de forma no recursiva: "+TribonacciNoRe(num)); 
    
}
else {
    alert("Ha cancelado el programa!");
}