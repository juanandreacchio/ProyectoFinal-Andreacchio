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
console.log(botonesAumentarCantidad);

console.log(productosEnCarrito);


function cargarProductosAlCarro(){
  if(productosEnCarrito && productosEnCarrito.length > 0){
    carritoVacio.classList.add('none');
    containerProductos.classList.remove('none');
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
            <p>$${producto.precio}</p>
          </div>
          <div class="subtotal">
            <small>Subtotal</small>
            <p>
              $${producto.precio * producto.cantidad}
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
  }
  else{
    carritoVacio.classList.remove('none');
    containerProductos.classList.add('none')
  }

}

cargarProductosAlCarro();


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

function actualizaBotonesDeEliminar (){
  botonesEliminar = document.querySelectorAll('.eliminarProductoCarro');
  botonesEliminar.forEach(boton =>{
    boton.addEventListener('click',eliminarDelCarrito);
  });
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
  productosEnCarrito[indice].cantidad= productosEnCarrito[indice].cantidad - 1;
  if(productosEnCarrito[indice].cantidad === 0){
    productosEnCarrito.splice(indice,1);
  }
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


