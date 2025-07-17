let cropper;
let filtroSeleccionado = 'none';

document.getElementById('foto').addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    document.getElementById('preview').src = e.target.result;
    document.getElementById('imageCropper').src = e.target.result;
  };

  reader.readAsDataURL(file);
});

document.getElementById('editarFoto').addEventListener('click', function() {
  document.getElementById('modalEditor').style.display = 'block';

  const image = document.getElementById('imageCropper');
  if (cropper) cropper.destroy();
  cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 1
  });
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modalEditor').style.display = 'none';
  if (cropper) cropper.destroy();
});

document.getElementById('filtro').addEventListener('change', function() {
  filtroSeleccionado = this.value;
});

document.getElementById('aplicarCambios').addEventListener('click', function() {
  const canvas = cropper.getCroppedCanvas({
    width: 150, height: 150
  });

  const dataURL = canvas.toDataURL();

  const preview = document.getElementById('preview');
  preview.src = dataURL;
  preview.style.filter = filtroSeleccionado;

  document.getElementById('modalEditor').style.display = 'none';
  if (cropper) cropper.destroy();
});

// Guardar formulario en localStorage (opcional)
document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const foto = document.getElementById('preview').src;

  const usuario = {
    nombre,
    correo,
    foto,
    filtro: filtroSeleccionado
  };

  localStorage.setItem('usuario', JSON.stringify(usuario));
  alert('Usuario guardado correctamente');
  this.reset();
});
