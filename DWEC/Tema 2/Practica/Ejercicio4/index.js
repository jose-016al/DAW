var r = Math.floor((Math.random() * (255 - 0 + 1)) + 0);
var g = Math.floor((Math.random() * (255 - 0 + 1)) + 0);
var b = Math.floor((Math.random() * (255 - 0 + 1)) + 0);

var color = document.getElementById('contenido');
color.style.backgroundColor = rgb(r,g,b);
