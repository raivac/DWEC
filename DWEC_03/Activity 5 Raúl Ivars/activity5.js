let salario = parseFloat(prompt("Escribe tu sueldo"));
let edad = parseFloat(prompt("Escribe tu edad"));

if (salario > 2000) {

    console.log(salario);

} else if (salario >= 1000 || salario <= 2000) {

    if (edad > 45) {

        salario += salario * 0.03;

        console.log(salario);

    } else if (edad <= 45) {
        salario += salario * 0.1;
        console.log(salario);
    }
} else if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
        console.log(salario);
    } else if (edad >= 30 || edad <= 45) {
        salario += salario * 0.03;
        console.log(salario);
    } else if (edad > 45) {

        salario += salario * 0.15;
        console.log(salario);
    }
}

alert(`Tu salario es ${salario}`);