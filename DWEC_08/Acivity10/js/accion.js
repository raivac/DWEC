//cogemos todos los elementos que vammos a utilizar por su id
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");
let sumar = document.getElementById("mas");
let restar = document.getElementById("menos");
let multipicar = document.getElementById("por");
let dividir = document.getElementById("entre");
let borrar = document.getElementById("ce");

//sumara si estan ambos numeros puestos
sumar.addEventListener("mousedown", function (ev) {
    if (numero1.value !== "" && numero2.value !== "") {
        resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value);
    }
});

//restará si estan ambos numeros puestos
restar.addEventListener("mousedown", function (ev) {
    if (numero1.value !== "" && numero2.value !== "") {
        resultado.value = parseFloat(numero1.value) - parseFloat(numero2.value);
    }
});

//multiplicará si estan ambos numeros puestos
multipicar.addEventListener("mousedown", function (ev) {
    if (numero1.value !== "" && numero2.value !== "") {
        resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value);
    }
});

//dividirá si estan ambos numeros puestos
dividir.addEventListener("mousedown", function (ev) {
    if (numero1.value !== "" && numero2.value !== "" &&  numero2 !=0) {
        resultado.value = parseFloat(numero1.value) / parseFloat(numero2.value);
    }
});

//borrará el contenido
borrar.addEventListener("mousedown", function(ev){
    numero1.value=null;
    numero2.value=null;
    resultado.value=null;
});