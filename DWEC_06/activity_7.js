    //pedimos  el nif
    let nif = prompt("Introduce tu NIF");
    //lo pasamos todo a mayusculas
    nif = nif.toUpperCase();

    //declaramos la exprasion regular
    var nifValido = /[XYZ]{0,1}[0-9]{8}[A-Z]{1}/;

    //si el nif introducio cumple con la expresion regular...
    if(nifValido.test(nif) == true){

        //separamos el numero de la letra cogiendo todo el string menos el ultimo caracter(la letra)
        let numero = nif.substring(0,nif.length-1);

        //si el numero contiene la primera letra X Y o Z la cambiaremos por el numero que pide el ejercico
        numero = numero.replace('X', 0);
        numero = numero.replace('Y', 1);
        numero = numero.replace('Z', 2);

        //separamos la letra del numero cogiendo el ultimo caracter
        let letra = nif.substring(nif.length-1, nif.length);

        //dividimos el numero entre 23 para sacar el resto y asi poder validar la letra
        numero = numero % 23;
        
        //declaramos el string de la letraValida en orden de menor a mayor dependiendo del numero 
        //que le corresponda a cada letra de 0 a 22 ej:T=0 , R=1 , W=2....
        let = letraValida = 'TRWAGMYFPDXBNJZSQVHLCKET';

        //como ya tenemos el resto del numero, sacamos la letra del string buscando la posicion que corresponda al numero
        letraValida = letraValida.substring(numero, numero+1);

        //comprobamos la letra que habiamos separado de nif con la que acabamos de separar con el resto del numero
        if (letraValida == letra) {
            //si coinciden las letras...
            document.write("NIF Valido!");
        }
        else{
            //si no coinciden las letras
            document.write("Error. La letra no coincide");
        }
    }
    else{
        //si no cumple la expresion regular...
        document.write("Error. Formato no valido");
    }

