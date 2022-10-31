//funcion que dira si es primo o no
function Primo(num){

    if (num == 0 || num == 1 || num == 4){
        return false;
    }
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
            return false;
        }
    }
	return true;
}
    
document.write("Los numeros primos entre el 1 y el 1000 son:");
//bucle que sacara los numeros primos del 1 al
for (let i=2 ; i<1000 ; i++ ) {

    if(Primo(i)==true){
        document.write("  "+i);
    }
}
