let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');

function activarDarkMode() {
    localStorage.setItem('dark-mode', "activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode() {
    localStorage.setItem('dark-mode', "desactivado");
    bodyDoc.classList.remove('dark-mode');
}

!darkMode && localStorage.setItem('dark-mode',"desactivado");
darkMode === "activado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
darkMode === "desactivado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>');

console.log(botonCambiarMode.innerHTML);



botonCambiarMode.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});
