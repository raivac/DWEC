function creaTabla(row = 10, col = 4, color = "black") {

    document.write("<table style='border:3px solid " + color + ";border-collapse:collapse; width:100%;text-align:center'>");

    for (let i = 0; i < row; i++) {

        document.write("<tr>");

        for (let j = 0; j < col; j++) {

            document.write("<td style='border:1px solid " + color + "'>Activity 2</td>")

        }
        document.write("</tr>")
    }
    document.write("</table>");
}

creaTabla();
document.write("<br>");
creaTabla(20, 10);
document.write("<br>");

for (let i = 0; i < 10; i++) {

    creaTabla(5, 4, "green");
    document.write("<br>");
}