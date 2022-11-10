
Array.prototype.media = function(){
    let suma = this.reduce((anterior,actual)=>(anterior+actual));
    let avg = suma/this.length;
        return avg;
    }
    lista = [1,2,4,5,6,7,9];
    console.log(lista.media());
