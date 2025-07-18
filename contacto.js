// Script para enviar formulario de contacto con EmailJS
//  Inicializa EmailJS con tu Public Key ANTES de enviar formularios
emailjs.init("7n40UCkkXTr5BAIzp"); // Reemplaza con tu Public Key real

// Evento submit del formulario de contacto
document.getElementById('formContacto').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita recarga

  // Envía el formulario usando EmailJS
  emailjs.sendForm(
    'service_ruu079b', // Service ID exacto de tu cuenta EmailJS
    'template_rd59jsb', // Template ID exacto de tu plantilla EmailJS
    this // 'this' es el formulario HTML
  )
  .then(function() {
    // Si se envía correctamente
    alert('Mensaje enviado correctamente. Gracias por contactarnos.');
    document.getElementById('formContacto').reset(); // Limpia formulario
  }, function(error) {
    // Si falla, muestra error en consola y alerta al usuario
    console.log('FAILED...', error);
    alert('Error al enviar mensaje. Intente más tarde.');
  });
});
