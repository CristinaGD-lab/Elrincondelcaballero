

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(id) {
  // Ocultar todas las secciones
  let secciones = document.querySelectorAll(".seccion");
  secciones.forEach((seccion) => {
    seccion.classList.remove("activa"); // Elimina la clase 'activa' de todas las secciones
  });

  // Mostrar la sección seleccionada
  document.getElementById(id).classList.add("activa"); // Agrega la clase 'activa' a la sección seleccionada
}
