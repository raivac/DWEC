
let altura = [];
let aste = "*";

for (let i = 0; i < 20; i++) {

    let num = parseInt(Math.random() * 50 + 1);
    altura[i] = num;

    for (let j = 0; j < num; j++) {
        document.write(aste);
    }
    document.write("<br>")
}