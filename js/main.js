let productos = [];
fetch("./js/productos.json")
.then(response => response.json())
.then(data =>{
    productos = data;
    cargarProductos(productos);
})

const contenedorProductos = document.querySelector('.productos');
const botonesCategoria = document.querySelectorAll('.boton-menu-categoria');
let darkMode = localStorage.getItem('dark-mode');
const botonCambiarMode = document.querySelector('.btnCambiarMode');
const bodyDoc = document.querySelector('body');
let select = document.querySelector("#ordenar");
const inputBuscarProducto = document.querySelector('.input-buscarProd');
const btnBuscarProd = document.querySelector('.btn-buscarProd');
const btnTodos = document.querySelector('#todos');



function ordenarProductos(criterio,productosAOrdenar){
    switch (criterio) {
        case 'precioMayor':
            ordenarProductosPorPrecioMayorMenor(productosAOrdenar);
            break;
        case 'precioMenor':
            ordenarProductosPorPrecioMenorMayor(productosAOrdenar);
            break;
        case 'alfabeticoAZ':
            ordenaAlfabeticoAZ(productosAOrdenar);
            break;
        case 'alfabeticoZA':
            ordenaAlfabeticoZA(productosAOrdenar);
            break;
        case 'Default':
            cargarProductos(productosAOrdenar);
            break;
    }
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
        <div class="img-producto">
        <img src="${producto.imagen}" alt="${producto.titulo}">
    </div>
    <div class="info-producto">
        <div class="nombre">
            <label for="">${producto.titulo}</label>
        </div>
        <div class="precioYCarrito">
            <p>
                <label class="precio">$${(producto.precio).toFixed(2)}</label>
            </p>
            <button id="${producto.id}" class="agregarCarrito">Agregar al Carrito</button>
        </div>
    </div>
        `;

        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}



select.value = "Default";
select.addEventListener('change', () => {
    let opcionSeleccionada = select.value;
    console.log(opcionSeleccionada);
    switch (opcionSeleccionada) {
        case 'precioMayor':
            ordenarProductosPorPrecioMayorMenor(productos);
            break;
        case 'precioMenor':
            ordenarProductosPorPrecioMenorMayor(productos);
            break;
        case 'alfabeticoAZ':
            ordenaAlfabeticoAZ(productos);
            break;
        case 'alfabeticoZA':
            ordenaAlfabeticoZA(productos);
            break;
        case 'Default':
            cargarProductos(productos);
            break;
    }
})

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');
        if (e.currentTarget.id === 'todos') {
            select.value = "Default";
            cargarProductos(productos);
            select.addEventListener('change', () => {
                let opcionSeleccionada = select.value;
                ordenarProductos(opcionSeleccionada,productos);
            })
        }
        else {
            const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosFiltrados);
            select.value = "Default";
            select.addEventListener('change', () => {
                let opcionSeleccionada = select.value;
                ordenarProductos(opcionSeleccionada,productosFiltrados);
            })
        }
    })
})


!darkMode && localStorage.setItem('dark-mode',"desactivado");
darkMode === "activado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>')

darkMode === "desactivado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>');


function activarDarkMode() {
    localStorage.setItem('dark-mode', "activado");
    bodyDoc.classList.add('dark-mode');
}

function desactivarDarkMode() {
    localStorage.setItem('dark-mode', "desactivado");
    bodyDoc.classList.remove('dark-mode');
}


botonCambiarMode.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');
    darkMode === "activado" && (desactivarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-sun"></i>')
    darkMode === "desactivado" && (activarDarkMode(),botonCambiarMode.innerHTML = '<i class="fa-solid fa-moon"></i>');
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.agregarCarrito');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    })
};

let productosEnCarrito;
let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
productosEnCarritoLS ? productosEnCarrito = JSON.parse(productosEnCarritoLS) : productosEnCarrito = [];


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregar = productos.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => productoAgregar.id === producto.id)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else {
        productoAgregar.cantidad = 1;
        productosEnCarrito.push(productoAgregar);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    darkMode = localStorage.getItem("dark-mode");
    if(darkMode === "desactivado"){
    Toastify({
        text: "Producto agregado al carrito!",
        duration: 1000,
        destination: "../html/carrito.html",
        newWindow: false,
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
            text: "Producto agregado al carrito!",
            duration: 1000,
            destination: "../html/carrito.html",
            newWindow: false,
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
}


function ordenarProductosPorPrecioMayorMenor(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => b.precio - a.precio);
    cargarProductos(productosAux);
}

function ordenarProductosPorPrecioMenorMayor(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => a.precio - b.precio);
    cargarProductos(productosAux);
}

function ordenaAlfabeticoZA(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => {
        if (a.titulo < b.titulo) {
            return 1;
        }
        if (a.titulo > b.titulo) {
            return -1;
        }
        return 0;
    })
    cargarProductos(productosAux);
}


function ordenaAlfabeticoAZ(productosElegidos) {
    const productosAux = [...productosElegidos];
    productosAux.sort((a, b) => {
        if (a.titulo < b.titulo) {
            return -1;
        }
        if (a.titulo > b.titulo) {
            return 1;
        }
        return 0;
    })
    cargarProductos(productosAux);
}

btnBuscarProd.addEventListener('click',(e)=>{
    e.preventDefault();
    const busqueda = inputBuscarProducto.value.charAt(0).toUpperCase() + inputBuscarProducto.value.slice(1);
    console.log(busqueda);
const productosInclude = productos.filter(producto => producto.titulo.includes(busqueda));
console.log(productosInclude);
cargarProductos(productosInclude);
select.value = "Default";
select.addEventListener('change', () => {
    let opcionSeleccionada = select.value;
    ordenarProductos(opcionSeleccionada,productosInclude);
})
});

inputBuscarProducto.addEventListener('keyup',()=>{
    botonesCategoria.forEach(boton => boton.classList.remove('active'));
    btnTodos.classList.add('active');
    const busqueda = inputBuscarProducto.value.charAt(0).toUpperCase() + inputBuscarProducto.value.slice(1);
    console.log(busqueda);
const productosInclude = productos.filter(producto => producto.titulo.includes(busqueda));
console.log(productosInclude);
cargarProductos(productosInclude);
select.value = "Default";
select.addEventListener('change', () => {
    let opcionSeleccionada = select.value;
    ordenarProductos(opcionSeleccionada,productosInclude);
})
})




