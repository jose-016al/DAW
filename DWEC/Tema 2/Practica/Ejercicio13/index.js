var cadena = prompt("Introduce una cadena");
var contador_a = 0;
var vocales = 0;
var e = 0;


for (let i = 0; i < cadena.length; i++) {
    if (cadena.charAt(i) == "a" || cadena.charAt(i) == "A") {
        contador_a++;
    } else if (cadena.charAt(i) == "e" || cadena-charAt(i) == "E") {
        vocales++;
        e++;
    } 
}
alert("La letra 'a' aparece: " + contador_a);