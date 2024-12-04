
// Muestra un cuadro de alerta con un mensaje de bienvenida
document.getElementById('welcomeButton').addEventListener('click', function() {
    alert('¡Bienvenido a nuestra página!');
  });

  // Cambia el contenido del párrafo
  document.getElementById('changeTextButton').addEventListener('click', function() {
    const paragraph = document.getElementById('parrafo');
    paragraph.textContent = 'El contenido del párrafo ha sido cambiado exitosamente.';
  });