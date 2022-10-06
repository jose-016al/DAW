var ventana;

function abrir() {
    ventana = window.open();
}

function cierra() {
    ventana.close();
}

function comprobar() {
    if (ventana == undefined) {
        alert("No se ha abierto ninguna ventana");
    } else {
        let isCerrada = ventana.closed;
        if (isCerrada == true) {
            alert("La ventana se ha cerrado correctamente");
        } else if (isCerrada == false) {
            alert("La ventana no se ha cerrado");
        }
    }
}

function abrirAuxiliar() {
    let name = prompt("Introduce un nombre para la nueva pagina");
    window.name = "hola";
    ventana = window.open("./auxiliar.html");
}

function abrirMoodle () {
    ventana = window.open("https://educacionadistancia.juntadeandalucia.es/centros/granada/", "height=800,width=600");
}