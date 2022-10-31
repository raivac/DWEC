//pedimos un valor y lo parseamos
var num = parseInt(prompt("Dime un numero y te dire su valor de Triibonacci"));



/*-----SOLUCION RECURSIVA-----*/
//creammos la funcion recursiva a la que le pasaremos el valor
function TribonacciRe(n){

    if(n<=1){
        //si el valor es menor o 1 devolvera 1
        return 1;
    }
    else{//si el valor es mayoe que 1 se le sumara a este el resultado de la funcion recursiva de un numero menor que este
        return n + TribonacciRe(n-1);
    }
}
//imprimira el resultado de la funcion recursiva
document.write("Resultado del valor de Fibonacci de "+num+" de forma recursiva: "+TribonacciRe(num)+"<hr>");


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
document.write("Resultado del valor de Fibonacci de "+num+" de forma no recursiva: "+TribonacciNoRe(num));