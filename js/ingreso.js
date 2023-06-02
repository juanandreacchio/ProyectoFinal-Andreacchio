let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
console.log(botonCambiarMode);
const bodyDoc = document.querySelector('body');

if(!darkMode){
    localStorage.setItem('dark-mode',"desactivado");
}
if(darkMode === "activado"){
    activarDarkMode();
    botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>'
}
if(darkMode === "desactivado"){
    desactivarDarkMode();
    botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>'
}

function activarDarkMode(){
    localStorage.setItem('dark-mode',"activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode(){
    localStorage.setItem('dark-mode',"desactivado");
    bodyDoc.classList.remove('dark-mode');
}

console.log(botonCambiarMode.innerHTML);



botonCambiarMode.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    if(darkMode === "activado"){
        desactivarDarkMode();
        botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
    if(darkMode === "desactivado"){
        activarDarkMode();
        botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
});

const ojo = document.querySelector('.ojo');
console.log(ojo);
let formContraseña = document.querySelector('.formContrasenia')
console.log(formContraseña.attributes.type);
console.log(ojo.children);
let puedoVerContraseña = false;
ojo.addEventListener('click', function () {
    if (!puedoVerContraseña) {
        formContraseña.setAttribute("type", "text");
        ojo.innerHTML = '<i class="fa-sharp fa-solid fa-eye-slash" style="width: 18px; height: 16px;"></i>';
        puedoVerContraseña = true;
    }
    else {
        formContraseña.setAttribute("type", "password");
        ojo.innerHTML = '<i class="fa-solid fa-eye" ></i>';
        puedoVerContraseña = false;
    }
})