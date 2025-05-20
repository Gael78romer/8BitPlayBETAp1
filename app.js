
function selectProfile(name) {
  document.getElementById('splash').classList.remove('hidden');
  document.getElementById('profile-select').classList.add('hidden');
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('main-menu').classList.remove('hidden');
    document.getElementById('selected-profile').innerText = name;
  }, 2000);
}

function toggleMenu() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('hidden');
}

function goToSection(section) {
  alert("Navegando a: " + section);
}

function resetProfile() {
  location.reload();
}

function logout() {
  alert("Simulación de cierre de sesión. Ahora mostrarías un login.");
  location.reload();
}

function openSerie() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('media-view').classList.remove('hidden');
  document.getElementById('media-banner').style.backgroundImage = "url('seriebanner.png')";
  document.getElementById('media-options').innerHTML = `
    <button onclick="window.open('https://www.youtube.com/watch?v=VIDEO_ID_1')">Reproducir Capítulo 1</button>
    <button onclick="alert('Seleccionar capítulo')">Selección de capítulo</button>
    <p>Contenido relacionado...</p>
  `;
}

function openMovie() {
  document.getElementById('main-menu').classList.add('hidden');
  document.getElementById('media-view').classList.remove('hidden');
  document.getElementById('media-banner').style.backgroundImage = "url('moviebanner.png')";
  document.getElementById('media-options').innerHTML = `
    <button onclick="window.open('https://www.youtube.com/watch?v=VIDEO_ID_2')">Reproducir Película</button>
    <p>Contenido relacionado...</p>
  `;
}

function goBackToMenu() {
  document.getElementById('media-view').classList.add('hidden');
  document.getElementById('main-menu').classList.remove('hidden');
}
