let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
let btnIngresarUsuario = document.querySelector('#ingresarUsuario');
const baseDeUsuarios = JSON.parse(localStorage.getItem("Base-de-datos"));
let inputUsuario = document.querySelector('.ingresoUsuario');
let inputPass = document.querySelector('.formContrasenia');
let textoFailLogin = document.querySelector('.loginFail');
const boxIngresar = document.querySelector('.hijo')
let estaLogeadoSS = sessionStorage.getItem("logeado");
let botonCerrarSesion;
let ojo = document.querySelector('.ojo');
let formContraseña = document.querySelector('.formContrasenia')
let puedoVerContraseña = false;

function actualizarBotonCerrarSesion() {
    botonCerrarSesion = document.querySelector('.cerrarSesion')
}

function actualizarInputsYBotones() {
    btnIngresarUsuario = document.querySelector('#ingresarUsuario');
    inputUsuario = document.querySelector('.ingresoUsuario');
    inputPass = document.querySelector('.formContrasenia');
    textoFailLogin = document.querySelector('.loginFail');
    ojo = document.querySelector('.ojo');
    formContraseña = document.querySelector('.formContrasenia')
    puedoVerContraseña = false;
}

function iniciarSesion() {
    if (inputUsuario.value == "" || inputPass.value == "") {
        alert('Datos inválidos');
    }
    else {
        textoFailLogin.classList.add('none');
        if (baseDeUsuarios.some(usuario => inputUsuario.value === usuario.nombreUsuario && inputPass.value === usuario.contraseña)) {
            boxIngresar.innerHTML = `
            <p class="bienvenida">Bienvenido de nuevo ${inputUsuario.value}!</p>
          <p class="comprar"><a href="../index.html">Ingrese aquí</a> para encontrar lo que estaba buscando!</p>
          <button class="cerrarSesion">Cerrar sesión</button>
            `
            actualizarBotonCerrarSesion();
            botonCerrarSesion.addEventListener('click', cerrarSesion);
            const userLogeado = {
                nombreUsuario: inputUsuario.value,
                contraseña: inputPass.value
            }
            sessionStorage.setItem("logeado", true);
            sessionStorage.setItem("usuarioLogeado", JSON.stringify(userLogeado));

        }
        else {
            textoFailLogin.classList.remove('none');
        }
    }
}


function cerrarSesion() {
    sessionStorage.setItem("logeado", false);
    sessionStorage.removeItem("usuarioLogeado");
    boxIngresar.innerHTML = `
    <h1 class="tituloRegistro">INGRESO</h1>
    <div class="usuario">
        <p class="tituloUsuario">USUARIO</p>
        <div class="input-group mb-3">
            <input type="text" class="form-control ingresoUsuario" placeholder="Nombre de Usuario" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
    </div>
    <div class="contrasenia">
        <p class="tituloContrasenia">CONTRASEÑA</p>
        <div class="input-group">
            <span class="input-group-text ojo" id="basic-addon1"><i class="fa-solid fa-eye"></i></span>
            <input type="password" class="form-control formContrasenia" placeholder="Contraseña" aria-label="Username"
                aria-describedby="basic-addon1">
        </div>
    </div>
    <p class="loginFail none">Usuario o contraseña incorrecto/s. Vuelva a intentarlo</p>
    <p class="primeraVez">¿Primera vez en DBYShirts? <a href="./registro.html">Registrate</a> aquí</p>
    <a href="./olvideMiContrasenia.html" id="olvideContrasenia"><label for="">Olvidé mi contraseña</label></a>
    <div class="enviarRegistro">
        <button id="ingresarUsuario">INGRESAR</button>
    </div>
    `
    actualizarInputsYBotones();
    btnIngresarUsuario.addEventListener('click', iniciarSesion);
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
}

if (estaLogeadoSS) {
    if (estaLogeadoSS === 'true') {
        let usuarioSS = JSON.parse(sessionStorage.getItem("usuarioLogeado"));
        boxIngresar.innerHTML = `
        <p class="bienvenida">Bienvenido de nuevo ${usuarioSS.nombreUsuario}!</p>
        <p class="comprar"><a href="../index.html">Ingrese aquí</a> para encontrar lo que estaba buscando!</p>
        <button class="cerrarSesion">Cerrar sesión</button>
        `
        actualizarBotonCerrarSesion();
        botonCerrarSesion.addEventListener('click', cerrarSesion);
    }
}
else {
    sessionStorage.setItem("logeado", false);
}



btnIngresarUsuario.addEventListener('click', iniciarSesion);
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

function activarDarkMode() {
    localStorage.setItem('dark-mode', "activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode() {
    localStorage.setItem('dark-mode', "desactivado");
    bodyDoc.classList.remove('dark-mode');
}

!darkMode && localStorage.setItem('dark-mode', "desactivado");
darkMode === "activado" && (activarDarkMode(), botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>')
darkMode === "desactivado" && (desactivarDarkMode(), botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>');




botonCambiarMode.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(), botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(), botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});


