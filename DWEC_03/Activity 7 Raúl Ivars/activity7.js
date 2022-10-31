let num = prompt("Indica un numero");
if (isNaN(num) || num < 0) {
  alert("Numero incorrecto")
}
else {
  for (let i = 0; i < num; i++) {
    let alt = '';
    for (let j = 0; j < i + 1; j++) {
      alt = alt + '*';
    }
    document.write(alt)
    document.write("<br>")
  }
}


