
//creamos el nuevo metodo 
Map.prototype.invertMap = function(){

    //creamos el nuevo mapa 
    const nuevoMapa = new Map();

   //bucle que irá sacando los pares clave-valor
    for(let [clave,valor] of this){

        //declaramos con LET el nuevo array que almacenará las claves repetidas
        //con CONST daba error no se porque
        let posi =[];

        //si no esta el valor como clave en el nuevo mapa lo meterá y se le asignara al array la clave que tenia
        if(!nuevoMapa.has(valor)){

            posi.push(clave);
            nuevoMapa.set(valor,posi);
        }
        else{
            //si ya esta el valor como clave, cogoremeos el array que tiene como valor y le añadiremos a este la clave.
            posi = nuevoMapa.get(valor);
            posi.push(clave);
            nuevoMapa.set(valor,posi);
        }
    }
    //devolvera el nuevo mapa
    return nuevoMapa;
}

const mapa = new Map();
mapa.set(1,"Optimal").set(2,"Noteworthy").set(3,"Noteworthy").set(4,"Excellent").set(5,"Improvable").set(6,"Excellent").set(7,"Optimal");
//mostramos el mapa viejo
console.log(mapa);
//mostraremos el nuevo mapa.
console.log(mapa.invertMap());