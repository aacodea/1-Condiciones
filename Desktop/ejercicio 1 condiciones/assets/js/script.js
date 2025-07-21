// Seleccionamos la imagen
const imagen = document.querySelector("#imagen");

// Agregar evento de clic a la imagen
imagen.addEventListener("click", function() {
  // Verificamos si la imagen ya tiene el borde rojo
  if (imagen.style.border == "2px solid red") {
    // Si tiene borde, lo quitamos
    imagen.style.border = "none";
  } else {
    // Si no tiene borde, lo agregamos
    imagen.style.border = "2px solid red";
  }
});
