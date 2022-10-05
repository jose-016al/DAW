var respuesta = true;
var aleatorio = 200;
var numero;

var contador = 1;

do {
    numero = prompt("Introduce un numero");
    if (isNaN(numero)) {
        numero = prompt("Erros, debe ser un valor numerico");
        contador++;
    } else {
        if (numero > aleatorio) {
            numero = prompt("El numero es menor");
            contador++;
        } else if (numero < aleatorio) {
            numero = prompt("El numero es mayor");
            contador++;
        } else if (numero == aleatorio) {
            var respuesta = confirm("Has acertado el numero con: " + contador + " intentos ¿Quieres volver a jugar?")
            if (respuesta == true) {
                contador = 1;
                // aleatorio = Math.floor((Math.random() * (1001 - 1 + 1)) + 1);
            } else {
                respuesta = false;
            }
        }
    }
} while (numero != aleatorio && respuesta == false);



