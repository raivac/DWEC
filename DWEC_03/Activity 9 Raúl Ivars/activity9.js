let numero = prompt("Indica un numero y te dire su factorial");
let fact = 1
if (isNaN(numero) || numero < 0){
    alert("Numero incorrecto")
}
    for(i = 1;i<numero;i++){
        fact = fact*i
    }
    alert("El factorial es " + fact)