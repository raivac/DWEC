
let input = document.getElementById("tarea");
let boton = document.getElementById("mas");
let lista = document.getElementById("lista");

boton.addEventListener("mousedown", function (ev) {

    //si hay contenido en el cuadro...
    if (input.value !== "") {

        //creamos el nuevo elemento de la lista
        let li = document.createElement("li");

        //El contenido de la lista sera el valor del input
        li.textContent = input.value;
        li.setAttribute("class", "tarea");

        //creamos el boton de borrar
        let borrar = document.createElement("button");
        borrar.textContent = "Borrar";

        //insertamos el contenido de la tarea y el boton
        lista.appendChild(li);
        li.appendChild(borrar);

        
        borrar.addEventListener("click", function(ev){
            ev.target.parentElement.remove();
        });
    };
});


//Con mousedown Si suelto el click sobre el boton + no se queda guardado no se porque 

//Si lo hago con click se crea y desaparece al instante

