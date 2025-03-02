//Mostrar mensaje al entrar en la página

document.addEventListener("DOMContentLoaded", function () {
  alert("¡Bienvenido a mi página web!");
});
function mostrarSeccion(id) {
  // Ocultar todas las secciones
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach((seccion) => {
    seccion.classList.remove("activa");
  });

  // Mostrar la sección seleccionada
  document.getElementById(id).classList.add("activa");
}
