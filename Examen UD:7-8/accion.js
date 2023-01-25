
//cogemos los elementos que vamos a usar:

let producto = document.getElementById("producto");
let cantidad = document.getElementById("cantidad");
let precio = document.getElementById("precio-unitario");
let añadir = document.getElementById("añadir");

//cogemos el tbody para rellenarlo con los datos
let tabla = document.getElementsByTagName("tbody")[0];


//cuando se pulse el boton añadir...
añadir.addEventListener("click", (ev) => {
    ev.preventDefault();
    rellenarProductos();
    rellenarFactura();

});

//FUNCION CALCULAR LA FACTURA
function rellenarFactura() {

    //cogemos los elementos que vamos a usar
    let base = document.getElementById("base-imponible");
    let iva = document.getElementById("iva");

    const ivabase = 0.21;
    let total = document.getElementById("total");
    let lineas = tabla.getElementsByTagName("tr");
    base.textContent = 0;
    //bucle que recorrera las filas calculando la  base total el iva y el precio total
    for (let i = 0; i < lineas.length; i++) {


        /********************Base imponible*********************/
        //cogeremos las filas segun el bucle
        let linea = lineas[i];
        //cogeremos la tercera celda que corresponde al precio total;
        let columna = linea.getElementsByTagName("td")[3];
        //cogemos la base que tenemos y el total de la nueva fila
        base.textContent = parseFloat(base.textContent) + parseFloat(columna.textContent);


        /********************Iva*********************/
        iva.textContent = parseFloat(base.textContent) * ivabase;


        /**********************TOTAL**********************/
        total.textContent = parseFloat(iva.textContent) + parseFloat(base.textContent)


    }
}






//FUNCION QUE LLENARA LA FACTURAç
function rellenarProductos() {

    //si esta todo rellenado y con numeros positivos
    if (producto.value != "" && cantidad.value > 0 && precio.value > 0) {
        //creamos el elemento tr sobre el cual se  añadiran las filas
        let nuevaFila = document.createElement("tr");
        tabla.appendChild(nuevaFila);

        //cogemos el valor del producto y lo ponemos en la tbody creando una nueva celda
        let nombreProducto = producto.value;
        let nuevoP = document.createElement("td");
        nuevoP.textContent = nombreProducto + " ";
        nuevaFila.appendChild(nuevoP);


        //cogemos el valor de la cantidad y lo ponemos en la tbody creando una nueva celda
        let cantidadProducto = cantidad.value;
        let nuevaC = document.createElement("td");
        nuevaC.textContent = cantidadProducto;
        nuevaFila.appendChild(nuevaC);


        //cogemos el valor de la cantidad y lo ponemos en la tbody creando una nueva celda
        let precioUnitario = precio.value;
        let precioU = document.createElement("td");
        precioU.textContent = precioUnitario;
        nuevaFila.appendChild(precioU);


        //calculamos el precio total;
        let precioTotal = parseFloat(precioUnitario) * parseFloat(cantidadProducto);
        let precioT = document.createElement("td");
        precioT.textContent = precioTotal + " ";
        nuevaFila.appendChild(precioT);


        //creamos el boton de eliminar
        let eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
        nuevaFila.appendChild(eliminar);

        //creamos el boton de detalle
        let detalle = document.createElement("button");
        detalle.textContent = "Detalle";
        nuevoP.appendChild(detalle);

        detalle.addEventListener("click", () => {
            let alerta = alert(`DETALLE DEL PRODUCTO\n
                            Producto: ${nombreProducto}\n
                            Cantidad: ${cantidadProducto}\n
                            Precio Unitario: ${precioUnitario}\n
                            Precio Total: ${precioTotal}`)
        })


        //eliminara tl tr de la fila seleccionada
        eliminar.addEventListener("click", (ev) => {
            ev.target.parentElement.remove();
            rellenarFactura();
        });

        //eliminar los datos de entrada cuando se añada la fila
        producto.value = null;
        cantidad.value = null;
        precio.value = null;
    }
    else{
        alert("Rellene todos los campos o pon cantidades superiores a 0")
    }
}


