let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
const ingresarUsuario = document.querySelector('#ingresarUsuario');
const baseDeUsuarios = JSON.parse(localStorage.getItem("Base-de-datos"));
const inputUsuario = document.querySelector('.ingresoUsuario');
const inputPass = document.querySelector('.formContrasenia');
const textoFailLogin = document.querySelector('.loginFail');
const boxIngresar = document.querySelector('.hijo')
let estaLogeadoSS = sessionStorage.getItem("logeado");
if (estaLogeadoSS){
    if (estaLogeadoSS === 'true'){
        let usuarioSS = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
        boxIngresar.innerHTML= `
        <p class="bienvenida">Bienvenido de nuevo ${usuarioSS.nombreUsuario}!</p>
      <p class="comprar"><a href="../index.html">Ingrese aquí</a> para encontrar lo que estaba buscando!</p>
        `
    }

}
else{
    sessionStorage.setItem("logeado",false);
}



ingresarUsuario.addEventListener('click',() =>{
    if(inputUsuario.value == "" || inputPass.value == ""){
        alert('Datos inválidos');
    }
    else{
        textoFailLogin.classList.add('none');
        console.log(inputUsuario.value);
        if (baseDeUsuarios.some(usuario => inputUsuario.value === usuario.nombreUsuario && inputPass.value === usuario.contraseña)){
            boxIngresar.innerHTML= `
            <p class="bienvenida">Bienvenido de nuevo ${inputUsuario.value}!</p>
          <p class="comprar"><a href="../index.html">Ingrese aquí</a> para encontrar lo que estaba buscando!</p>
            `
            const userLogeado = {
                nombreUsuario : inputUsuario.value,
                contraseña : inputPass.value
            }
            sessionStorage.setItem("logeado",true);
            sessionStorage.setItem("usuarioLogeado",JSON.stringify(userLogeado));
            console.log(userLogeado);
        }
        else{
            textoFailLogin.classList.remove('none');
        }
    }
})

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