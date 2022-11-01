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
    //creammos la funcion recursiva a la que le pasaremos el valor
    function TribonacciRe(n){
            
            if(n<=1){
                //si el valor es menor o 1 devolvera 1
                return 1;
            }
            else{
                return  n + TribonacciRe(n-2) + TribonacciRe(n-3)
            }
    }
    //imprimira el resultado de la funcion recursiva
    document.write("Resultado del valor de Tribonacci de "+num+" de forma recursiva: "+TribonacciRe(num)+"<hr>");


    /*-----SOLUCION NO RECURSIVA-----*/
    function TribonacciNoRe(n){
   
        let res=0;
        /*bucle que hasta que el valor dado no sea 0 irá guardando en una variable nueva(res) el resultado de la de la resta de 
        esta nueva vaiable menos el valor dado y posteriormente se le restara 1 al valor dado para que termine el bucle al llegar 0 */
        while(n>0) {
            res-=n;
            n--;
        }
        //al hacer el bucle restando el resultado dara negativo, por lo que devolveremos el valor absoluto.
        return Math.abs(res);
    }
    document.write("Resultado del valor de Tribonacci de "+num+" de forma no recursiva: "+TribonacciNoRe(num)); 
    }

else{
    alert("Ha cancelado el programa!");
}