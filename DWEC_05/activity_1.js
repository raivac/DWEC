
let rand;

for (let i = 0; i < 500; i++) {
    rand = parseInt(Math.random() * 10000 + 1);
    document.write(rand + " es : " + EvenOdd(rand) + "<br>");
}


function EvenOdd(x) {                               

    return x % 2 == 0 ? "even" : "odd";

}
