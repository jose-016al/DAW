var nombre = prompt("Introduce tu nombre");
var apellidos = prompt("Introduce tus apellidos");
var salario = prompt("Introduce tu salario");
var edad = prompt("Introduce tu edad");

if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    } else if (edad > 30 && edad > 45) {
        salario = salario / 100 * 3;
    } else if (edad > 45) {
        salario = salario / 100 * 45;
    }
} else if (salario >= 1000 && salario <= 2000) {
    if (edad <= 45 ) {
        salario = salario / 100 * 10;
    } else if (edad > 45) {
        salario = salario / 100 * 3;
    }
}