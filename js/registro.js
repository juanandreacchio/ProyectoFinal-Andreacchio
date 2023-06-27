let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
const inputUsuario = document.querySelector('.inputEnviar');
const inputPass = document.querySelector('.formContrasenia');
const btnRegistrarse = document.querySelector('#registrarUsuario');
let textoFailLogin = document.querySelector('.loginFail');
let baseDeUsuarios;
baseDeUsuariosLS = localStorage.getItem("Base-de-datos");
baseDeUsuariosLS ? baseDeUsuarios = JSON.parse(baseDeUsuariosLS) : baseDeUsuarios = [];
const inputEmail = document.querySelector('.inputEmail');

function validarEmail(email) {
    let formatoEmail = /\S+@\S+\.\S+/;
    return formatoEmail.test(email);
  }

//REGISTRO

btnRegistrarse.addEventListener('click',() =>{
    if (inputUsuario.value == "" || inputPass.value == ""){
        textoFailLogin.classList.remove('none');
        textoFailLogin.innerText = 'Debe completar todos los campos para registrarse'
    }
    else if(!validarEmail(inputEmail.value)){
        textoFailLogin.classList.remove('none');
        textoFailLogin.innerText = 'Ingrese un mail válido'
    }
    else
    {
        textoFailLogin.classList.add('none');
        const nuevoUser = new User(inputEmail.value,inputUsuario.value,inputPass.value);
        if(baseDeUsuarios.some(usuario => usuario.email === nuevoUser.email)){
            textoFailLogin.classList.remove('none');
            textoFailLogin.innerText = 'Ya hay un usuario registrado con ese mail pruebe con otro';
        }
        else if(baseDeUsuarios.some(usuario => usuario.usuario === nuevoUser.usuario)){
            textoFailLogin.classList.remove('none');
            textoFailLogin.innerText = 'Ya hay un usuario registrado con ese usuario pruebe con otro';
        }
        else{
        baseDeUsuarios.push(nuevoUser);
        localStorage.setItem("Base-de-datos",JSON.stringify(baseDeUsuarios));
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
        inputEmail.value = "";
    }
}
})


function User(email,nombreUsuario, contraseña) {
    this.email = email
    this.nombreUsuario = nombreUsuario;
    this.contraseña = contraseña;
  }

//DARK MODE

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




botonCambiarMode.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});

//OJO FORM CONTRASEÑA

const ojo = document.querySelector('.ojo');

let formContraseña = document.querySelector('.formContrasenia')
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