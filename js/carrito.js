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

console.log(productosEnCarrito);


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
          <img src="${producto.imagen}" alt="${producto.titulo}" srcset="" style="width: 85px; height: 85px;">
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
  productosEnCarrito = [];
  cargarProductosAlCarro();
  localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

botonCambiarMode.addEventListener('click', () =>{
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});


