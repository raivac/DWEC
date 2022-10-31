let num = prompt("Indica un numero");
if (isNaN(num) || num < 0) {
    alert("Numero incorrecto");
} else {

    document.write("Triangle 1: <br><br>");
    for (let i = 0; i <= num; i++) {
        for (let j = num - 1; j >= i; j--) {
            document.write('<tt>* </tt>');
        }
        document.write('<br>');
    }
    document.write("<br><br>");
    document.write("Triangle 2: <br><br>");
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num - i; j++) {
            document.write("&nbsp");
        }
        for (let k = 0; k <= i; k++) {
            document.write("<tt>* </tt>");
        }
        document.write("<br>");
    }
    document.write("<br><br>");
    document.write("Triangle 3: <br><br>");
    for (let i = 1; i <= num; i++) {
        for (let k = 0; k < i; k++) {
            document.write("&nbsp");
        }
        for (let j = 0; j < num - i + 1; j++) {
            document.write("<tt>* </tt>");
        }
        document.write("<br>");
    }

}