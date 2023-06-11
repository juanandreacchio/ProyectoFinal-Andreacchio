let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);
let darkMode = localStorage.getItem('dark-mode');
const carritoVacio = document.querySelector('.carritoEmpty');
const containerProductos = document.querySelector('.productosCarrito');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
console.log(botonCambiarMode);
let botonesEliminar = document.querySelectorAll('.eliminarProductoCarro');
const bodyDoc = document.querySelector('body');
let botonesAumentarCantidad = document.querySelectorAll('.aumentarCantidadProducto');
let botonesRestarCantidad = document.querySelectorAll('.restarCantidadProducto');
const containerAccionesCarrito = document.querySelector('.acciones-carito');
let total = document.querySelector('#total');
const botonVaciar = document.querySelector('#vaciarCarrito');
const tituloNumeroTarjeta = document.querySelector('.tarjeta');
const inputTarjeta = document.querySelector('.numberTarjeta');
var DateTime = luxon.DateTime;
let fechasDeLlegada = document.querySelector('.llegada');
const btnFinalizarCompra = document.querySelector('.finalizarCompra')
const containerCarrito = document.querySelector('.carrito');
const botonComprar = document.querySelector('.comprar');
const inputCVV = document.querySelector('.codigoDeSeguridad')
const inputFechaVencimiento = document.querySelector('.dateVencimiento');
const inputDireccion = document.querySelector('#inputDireccion')
const inputNumeroDireccion = document.querySelector('#inputNumeroDireccion');
const inputCP = document.querySelector('#inputCP');
const mensajeDeError = document.querySelector('.mensajeDeError');
const containerEnvio = document.querySelector('.envio');
const containerTarjeta = document.querySelector('.medioDePago');
const containerDireccion = document.querySelector('.direccion');
const containerBtnComprar = document.querySelector('.botonComprar');
const btnVolver = document.querySelector('.volver')

/*

            <img src="https://res.cloudinary.com/dmiy7cyjx/image/upload/v1683134072/CursoJS/camisetasNBA/camisetaNOLA_cmfcnm.png" alt="${producto.titulo}" srcset="" style="width: 85px; height: 85px;">
          </div>

            <div class="descripcionProductoCarro">
              <small>Producto</small>
              <p>
                Men's New Orleans Pelicans Zion Williamson Nike Navy 2020/21 Swingman Jersey - Icon Edition
              </p>
            </div>
            <div class="cantidadProductoCarro">
              <small>Cantidad</small>
              <p>
                <button class="restarCantidadProducto" id="${producto.id}">-</button> 1 <button class="aumentarCantidadProducto" id="${producto.id}">+</button>
              </p>
            </div>
            <div class="precioProductoCarro">
              <small>Precio</small>
              <p>$94.99</p>
            </div>
            <div class="subtotal">
              <small>Subtotal</small>
              <p>
                $94.99
              </p>
            </div>
            <button class="eliminarProductoCarro" id="${producto.id}">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
          </div>
*/

 function cargarProductosAlCarro(){
   if(productosEnCarrito && productosEnCarrito.length > 0){
     carritoVacio.classList.add('none');
     containerProductos.classList.remove('none');
     containerAccionesCarrito.classList.remove('none');
    containerProductos.innerHTML = '';
     productosEnCarrito.forEach(producto => {
         const div = document.createElement("div");
         div.classList.add("productoCarro");
         div.innerHTML = `
         <div class="img-productoCarro">
           <img src="${producto.imagen}" alt="${producto.titulo}" srcset="" style="width: 85px; height: 85px;">
          </div> 
          <div class="resto-productoCarro">
           <div class="descripcionProductoCarro">
             <small>Producto</small>
             <p>
               ${producto.titulo}
             </p>
           </div>
           <div class="cantidadProductoCarro">
             <small>Cantidad</small>
             <p>
               <button class="restarCantidadProducto" id="${producto.id}">-</button> ${producto.cantidad} <button class="aumentarCantidadProducto" id="${producto.id}">+</button>
             </p>
           </div>
           <div class="precioProductoCarro">
             <small>Precio</small>
             <p>$${(producto.precio).toFixed(2)}</p>
           </div>
           <div class="subtotal">
             <small>Subtotal</small>
             <p>
               $${(producto.precio * producto.cantidad).toFixed(2)}
             </p>
           </div>
           <button class="eliminarProductoCarro" id="${producto.id}">
             <i class="fa-solid fa-trash"></i>
           </button>
           </div>
         `
         containerProductos.append(div)
     });
     actualizaBotonesDeEliminar();
     actualizarBotonesDisminuir();
     actualizarBotonesAumentar();
     actualizarTotal();
   }
   else{
     carritoVacio.classList.remove('none');
     containerProductos.classList.add('none');
     containerAccionesCarrito.classList.add('none');
   }

 }

 cargarProductosAlCarro();


!darkMode && localStorage.setItem('dark-mode',"desactivado");
darkMode === "activado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>')

darkMode === "desactivado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>');


function activarDarkMode(){
    localStorage.setItem('dark-mode',"activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode(){
    localStorage.setItem('dark-mode',"desactivado");
    bodyDoc.classList.remove('dark-mode');
}

 console.log(botonCambiarMode.innerHTML);

 function actualizaBotonesDeEliminar (){
   botonesEliminar = document.querySelectorAll('.eliminarProductoCarro');
   botonesEliminar.forEach(boton =>{
     boton.addEventListener('click',eliminarDelCarrito);
   });
 }

 function actualizarTotal(){
   let precioTotal = productosEnCarrito.reduce((acc,producto) => acc + (producto.precio * producto.cantidad),0)
   total.innerText = `Total: $${precioTotal.toFixed(2)}`
 }

 function actualizarBotonesDisminuir(){
   botonesRestarCantidad = document.querySelectorAll('.restarCantidadProducto');
   botonesRestarCantidad.forEach(boton =>{
     boton.addEventListener('click',disminuirCantidad);
   })
 }

 function actualizarBotonesAumentar(){
   botonesAumentarCantidad = document.querySelectorAll('.aumentarCantidadProducto');
   botonesAumentarCantidad.forEach(boton =>{
     boton.addEventListener('click',aumentarCantidad);
   })
 }

 function aumentarCantidad (e){
   const idBoton = e.currentTarget.id;
   console.log(idBoton);
   const indice = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   productosEnCarrito[indice].cantidad++;
   cargarProductosAlCarro();
   localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
 }

 function disminuirCantidad (e){
   const idBoton = e.currentTarget.id;
   console.log(idBoton);
   const indice = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   productosEnCarrito[indice].cantidad = productosEnCarrito[indice].cantidad - 1;
   productosEnCarrito[indice].cantidad === 0 && productosEnCarrito.splice(indice,1);
   cargarProductosAlCarro();
   localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
 }

 function eliminarDelCarrito(e){
   const idBoton = e.currentTarget.id;
   const indice = productosEnCarrito.findIndex(producto => producto.id === idBoton);
   productosEnCarrito.splice(indice,1);
   cargarProductosAlCarro();
   localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
 }

 botonVaciar.addEventListener('click',vaciarCarrito);

 function vaciarCarrito(){
   const cantidadDeProductos = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad,0);
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === "desactivado"){
   Swal.fire({
     title: '¿Estás seguro?',
     text: `¿Deseas eliminar los ${cantidadDeProductos} productos del carrito? `,
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Si!',
     cancelButtonText: 'Cancelar',
   }).then((result) => {
     if (result.isConfirmed) {
       Swal.fire(
         'Vaciado!',
         'El carrito fue vaciado correctamente.',
         'success',
         productosEnCarrito = [],
         cargarProductosAlCarro(),
         localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))
       )
     }
   })
   }
   else{

     Swal.fire({
       title: '¿Estás seguro?',
       text: `¿Deseas eliminar los ${cantidadDeProductos} productos del carrito? `,
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Si!',
       cancelButtonText: 'Cancelar',
       iconColor: "#FF0035",
     }).then((result) => {
       if (result.isConfirmed) {
         Swal.fire(
           'Vaciado!',
           'El carrito fue vaciado correctamente.',
           'success',
           productosEnCarrito = [],
           cargarProductosAlCarro(),
           localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito))
         )
       }
     })
   }
 }

botonCambiarMode.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});

btnFinalizarCompra.addEventListener('click', () =>{




carritoVacio.classList.add('none');
containerProductos.classList.add('none');
containerAccionesCarrito.classList.add('none');
containerEnvio.classList.remove('none');
containerTarjeta.classList.remove('none');
containerDireccion.classList.remove('none');
containerBtnComprar.classList.remove('none');
var cleave = new Cleave('.codigoDeSeguridad', {
  blocks: [4],
  uppercase: true
});

btnVolver.addEventListener('click',() =>{
cargarProductosAlCarro();
containerEnvio.classList.add('none');
containerTarjeta.classList.add('none');
containerDireccion.classList.add('none');
containerBtnComprar.classList.add('none');
})

var cleave = new Cleave('.numberTarjeta', {
  creditCard: true,
  onCreditCardTypeChanged: function (type) {
    switch(type){
      case 'mastercard':
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta <i class="fa-brands fa-cc-mastercard fa-xl"></i>'
        break;
      case 'visa':
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta <i class="fa-brands fa-cc-visa fa-xl"></i>'
        break;
      case 'amex':
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta <i class="fa-brands fa-cc-amex fa-xl"></i>'
        break;
      case 'jcb':
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta <i class="fa-brands fa-cc-jcb fa-xl"></i>'
        break;
      case 'discover':
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta <i class="fa-brands fa-cc-discover fa-xl"></i>">'
        break;
      default:
        tituloNumeroTarjeta.innerHTML = 'Número de tarjeta';
        break;
  }
}
});

const fechaActual = DateTime.local();
const fechaEnDosDias = fechaActual.plus({ days: 2 });
const dia2Dias = fechaEnDosDias.day;
const month2Dias = fechaEnDosDias.toLocaleString({ month: "long" });
const fechaEnCincoDias = fechaActual.plus({ days: 5 });
const dia5Dias = fechaEnCincoDias.day;
const month5Dias = fechaEnCincoDias.toLocaleString({ month: "long" });

fechasDeLlegada.innerText = `Su compra llegará entre el ${dia2Dias} de ${month2Dias} y ${dia5Dias} de ${month5Dias}`;

var cleave = new Cleave('.dateVencimiento', {
  date: true,
  datePattern: ['m', 'y']
});

botonComprar.addEventListener('click',() =>{
  if (inputTarjeta.value === "" || inputCVV.value.length < 3 || inputTarjeta.value.length < 15 || inputFechaVencimiento.value === "" || inputCP === "" || inputDireccion === "" || inputCVV === ""){
    mensajeDeError.classList.remove('none')
  }
  else{
    productosEnCarrito = [],
    cargarProductosAlCarro(),
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
    carritoVacio.classList.remove('none');
    containerEnvio.classList.add('none');
containerTarjeta.classList.add('none');
containerDireccion.classList.add('none');
containerBtnComprar.classList.add('none');
Swal.fire({
  icon: 'success',
  title: 'Felicidades!',
  text: 'Compra realizada con éxito! ',
  footer: '<a href="../index.html">Seguir comprando</a>'
})
  }
})

})













