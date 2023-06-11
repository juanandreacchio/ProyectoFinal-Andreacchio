let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
console.log(botonCambiarMode);
const bodyDoc = document.querySelector('body');
const inputUsuario = document.querySelector('.inputEnviar');
const inputPass = document.querySelector('.formContrasenia');
const btnRegistrarse = document.querySelector('#registrarUsuario');
let textoFailLogin = document.querySelector('.loginFail');
let baseDeUsuarios;
baseDeUsuariosLS = localStorage.getItem("Base-de-datos");
baseDeUsuariosLS ? baseDeUsuarios = JSON.parse(baseDeUsuariosLS) : baseDeUsuarios = [];

btnRegistrarse.addEventListener('click',() =>{
    if (inputUsuario.value == "" || inputPass.value == ""){
        textoFailLogin.classList.remove('none');
    }
    else
    {
        textoFailLogin.classList.add('none');
        const nuevoUser = new User(inputUsuario.value,inputPass.value);
        baseDeUsuarios.push(nuevoUser);
        localStorage.setItem("Base-de-datos",JSON.stringify(baseDeUsuarios));
        console.log(baseDeUsuarios);
        darkMode = localStorage.getItem('dark-mode');
        if(darkMode === "desactivado"){
            Toastify({
                text: "Cuenta registrada!",
                duration: 1000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(90deg, rgba(104,197,219,1) 0%, rgba(95,168,208,1) 31%, rgba(202,233,255,1) 100%)",
                  color: "#101D42"
                },
                onClick: function(){} // Callback after click
              }).showToast();
            }
            else{
                Toastify({
                    text: "Cuenta registrada!",
                    duration: 1000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                      background: "linear-gradient(90deg, rgba(74,43,92,1) 0%, rgba(61,42,85,1) 31%, rgba(97,61,193,1) 100%)",
                      color: "white"
                    },
                    onClick: function(){} // Callback after click
                  }).showToast();
            }
        inputPass.value = "";
        inputUsuario.value = "";
    }
})

console.log(baseDeUsuarios);


function User(nombreUsuario, contraseña) {
    this.nombreUsuario = nombreUsuario;
    this.contraseña = contraseña;
  }

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