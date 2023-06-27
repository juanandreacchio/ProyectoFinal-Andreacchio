let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
const inputEmailRec = document.querySelector('#inputEmail');
const btnRecuperar = document.querySelector('.enviarRegistro > button');
const textoFailLogin = document.querySelector('.loginFail');

// * VALIDAR EMAIL

function validarEmail(email) {
    let formatoEmail = /\S+@\S+\.\S+/;
    return formatoEmail.test(email);
  }

btnRecuperar.addEventListener('click',()=>{
if(validarEmail(inputEmailRec.value)){
    inputEmailRec.value = "";
    textoFailLogin.classList.remove('none');
    textoFailLogin.classList.remove('loginFail');
    textoFailLogin.innerText = 'Se ha enviado el correo de recuperación si el mail se encuentra en nuestra página!';
}
else{
    textoFailLogin.classList.remove('none');
    textoFailLogin.classList.add('loginFail');
    textoFailLogin.classList.remove('textoAzul');
    textoFailLogin.innerText = 'Ingrese un mail válido';

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
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>',textoFailLogin.classList.add('textoAzul')
    ,textoFailLogin.classList.remove('textBlancoOlvideContra'))
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>',textoFailLogin.classList.remove('textoAzul'),
    textoFailLogin.classList.add('textBlancoOlvideContra'));
});
