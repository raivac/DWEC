let cont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < 10000; i++) {

    let rand = parseInt(Math.random() * 10 + 1);
    cont[rand - 1] += 1;

}
for (let i = 0; i < cont.length; i++) {

    document.write("El número " + (i + 1) + " esta " + cont[i] + " veces<br><hr>");

}
