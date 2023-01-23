export function timer() {

    async function contador1() {
        var cont = 60;
        var id = setInterval(function () {
        if (cont == 0){
            clearInterval(id);
            document.getElementById('cont2').innerHTML = "Fin";
        }
        else {
            cont--;
            document.getElementById('cont2').innerHTML = cont;
            
        }
    }, 130);
    }

    async function contador2() {
        var cont = 6;
        var id = setInterval(function () {
        if (cont == 0)
            clearInterval(id);
        else {
            cont--;
            document.getElementById('cont1').innerHTML = cont;
            
        }
    }, 1000);
    }

    let promesa1 = Promise.resolve(contador1());

    let promesa2 = new Promise((resolver) => {

        setTimeout(() => { resolver(contador2()) }, 2000);
    });


//No sabia como hacerlo con el otro temporizador y lo he hecho a mi manera
   
}