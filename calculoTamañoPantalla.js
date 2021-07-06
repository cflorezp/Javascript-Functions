

var alto = window.innerHeight; // esta propiedad me calcula el alto en pixeles de una pantalla
var ancho= window.innerWidth; // esta propiedad me calcula el ancho en pixeles de una pantalla

// asignar el height y width del body 
document.body.style.height = alto + "px";
document.body.style.width = ancho + "px";

//calculo y asignacion del height en tres partes del dom

// 20% del height
document.getElementById("part1").style.height = (alto * 0.2) + "px";

// 50% del height
document.getElementById("part2").style.height = (alto * 0.5) + "px";

// 30% del height
document.getElementById("part3").style.height = (alto * 0.3) + "px";
