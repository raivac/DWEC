let temp=0;

for (let i = 1; i <= 50; i++) {

    document.write("Numero: " + i + " --> ");

    for (let i = 0; i < 6; i++) {

        let num = parseInt(Math.random() * 49 + 1);
        if (num != temp) {
            document.write(num + "  ");
        }
        temp = num;
    }
    document.write("<br><hr><br>");
}