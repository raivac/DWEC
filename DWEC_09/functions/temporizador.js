
//activity 1
export function temporizador(tiempo){

    let promesa = new Promise((resolve, reject) => {
            let intervalo = setTimeout(()=>{
            resolve("Tiempo finalizado");
        }, tiempo);
    });
    return promesa;
}

