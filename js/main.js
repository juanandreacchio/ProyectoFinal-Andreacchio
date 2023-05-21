function Producto(nombre, talle, precio) {
    this.nombre = nombre;
    this.talle = talle;
    this.precio = precio;
}

function obtenerPosicionPorNombre(carritoDeCompras,productoAEliminar) {
    const nuevoArray = carritoDeCompras.map( producto => producto.nombre)
    posicionAEliminar = nuevoArray.indexOf(productoAEliminar);
    return posicionAEliminar;
}

function eliminarProductoPorPosicion(carritoDeCompras, posicion) {
    totalSinConvertir = totalSinConvertir - carritoDeCompras[posicion].precio
    carritoDeCompras.splice(posicion, 1);
}

function mostrarCarrito(){
    for (let n = 0; n < carrito.length; n++) {
        console.log(`Producto ${n + 1}\nNombre: ${carrito[n].nombre}\nTalle: ${carrito[n].talle}\nPrecio: $${carrito[n].precio}`);
    }
}

function calcularCuotas(cuotas,precio){
    let cuotaIndividual = Math.ceil(precio / cuotas);
    return cuotaIndividual;
}

function ordenarCarrito(carritoAOrdenar,criterio){
    switch(criterio){
        case '1':
            carritoAOrdenar.sort((a,b) => b.precio - a.precio);
            break;
        case '2':
            carritoAOrdenar.sort((a,b) => a.precio - b.precio)
            break;
        case '3':
            carritoAOrdenar.sort((a,b) =>{
                if (a.nombre < b.nombre){
                    return 1;
                }
                if (a.nombre> b.nombre){
                    return -1;
                }
                return 0;
            })
            break;
        case '4':
            carritoAOrdenar.sort((a,b) =>{
                if (a.nombre < b.nombre){
                    return -1;
                }
                if (a.nombre> b.nombre){
                    return 1;
                }
                return 0;
            })
            break;
}
}




let pedidoFinalizado = false;
let totalSinConvertir = 0;
let esNuevo;

let usuario = prompt('Ingrese su nombre de usuario');
alert(`Bienvenido ${usuario}! Que disfrutes tu visita a la página`);
let primeraVez = prompt('¿Es su primera vez en la página?(S/N)');
switch (primeraVez){
    case 's':
        case 'S':
            esNuevo = true;
            break;
    case 'n':
        case 'N':
            esNuevo = false;
            break;
    default:
        alert('Respuesta Inválida');
        esnuevo = false;
        break;
}

const carrito = [];

while (!pedidoFinalizado) {
    let infoProducto = prompt('Ingrese el nombre del producto');
    let talle = prompt('Ingrese el talle del producto');
    let precio = parseInt(prompt('Ingrese el precio del producto'));
    while (precio < 0) {
        precio = parseInt(prompt('Ingrese un precio valido'));
    }
    totalSinConvertir += precio;
    carrito.push(new Producto(infoProducto, talle, precio));
    alert(`Producto agregado correctamente!\nTotal acumulado: $${totalSinConvertir}`);
    let finalizarPedido = prompt('¿Desea finalizar el pedido?(S/N)');
    while (finalizarPedido != 'n' && finalizarPedido != 'N' && finalizarPedido != 'S' && finalizarPedido != 's') {
        finalizarPedido = prompt('Ingrese una opción válida(S/N)');
    }
    if (finalizarPedido == 'S' || finalizarPedido == 's') {
        pedidoFinalizado = true;
    }
}

mostrarCarrito();

let deseaOrdenarSuCarrito = prompt('¿Desea ordenar su carrito?(S/N)')
while (deseaOrdenarSuCarrito != 'n' && deseaOrdenarSuCarrito != 'N' && deseaOrdenarSuCarrito != 'S' && deseaOrdenarSuCarrito != 's') {
    deseaOrdenarSuCarrito = prompt('Ingrese una opción válida(S/N)');
}
while (deseaOrdenarSuCarrito == 'S' || deseaOrdenarSuCarrito == 's'){
    let metodoDeOrdenamiento = prompt('Elija el método de ordenamiento:\n1.Precio (mayor a menor)\n2.Precio (menor a mayor)\n3.Orden alfabético (A-Z)\n4.Orden alfabético (Z-A)');
    while (metodoDeOrdenamiento <1 && metodoDeOrdenamiento > 4){
        metodoDeOrdenamiento = prompt('Ingrese una opción válida:\n1.Precio (mayor a menor)\n2.Precio (menor a mayor)\n3.Orden alfabético (A-Z)\n4.Orden alfabético (Z-A)');
    }
    ordenarCarrito(carrito,metodoDeOrdenamiento);
    alert('Carrito ordenado correctamente!');
    mostrarCarrito();
    deseaOrdenarSuCarrito = prompt('¿Desea volver a ordenar su carrito?(S/N)');
}


let posicionAEliminar;
let deseaEliminar = prompt('¿Desea eliminar un producto del carrito?(S/N)');
while (deseaEliminar != 'n' && deseaEliminar != 'N' && deseaEliminar != 'S' && deseaEliminar != 's') {
    deseaEliminar = prompt('Ingrese una opción válida(S/N)');
}
if (deseaEliminar == 'S' || deseaEliminar == 's') {
    let metodoDeEliminacion = prompt('¿Desea eliminar el producto ingresando el nombre o por posicion en el carrito?\n1.Nombre\n2.Posicion\n3.Volver');
    while (metodoDeEliminacion != '1' && metodoDeEliminacion != '2' && metodoDeEliminacion != '3') {
        metodoDeEliminacion = prompt('Ingrese una opción válida\n1.Nombre\n2.Posicion\n3.Volver')
    }
    switch (metodoDeEliminacion) {
        case '1':
            let productoAEliminar = prompt('Nombre del producto a eliminar: ');
            posicionAEliminar = obtenerPosicionPorNombre(carrito,productoAEliminar);
            if (posicionAEliminar<0){
                alert('El producto no se encuentra en el carrito');
            }
            else{
            eliminarProductoPorPosicion(carrito, posicionAEliminar);
            }
            break;
        case '2':
            posicionAEliminar = parseInt(prompt(`Ingrese la posicion del producto que desea eliminar (1-${carrito.length})`));
            while (posicionAEliminar <= 0 || posicionAEliminar > carrito.length) {
                posicionAEliminar = prompt(`Ingrese una posicion válida (1-${carrito.length})`);
            }
            posicionAEliminar = posicionAEliminar - 1;
            eliminarProductoPorPosicion(carrito, posicionAEliminar);
            console.log(carrito);
            console.log("Producto eliminado correctamente!");
        case '3':
            break;
    }

}




let divisa = prompt('Ingrese la divisa con la que desea pagar\n1.USD\n2.ARS\n3.EUR');
while (divisa != '1' && divisa != '2' && divisa != '3') {
    divisa = prompt('Ingrese una divisa válida: ');
}
let totalConvertido;
let signoDivisa;
switch (divisa) {
    case '1':
        signoDivisa = '$';
        totalConvertido = totalSinConvertir;
        break;
    case '2':
        signoDivisa = 'ARS';
        totalConvertido = totalSinConvertir * 410; //Precio dolar tarjeta a 4 de mayo de 2023
        break;
    case '3':
        signoDivisa = '€';
        totalConvertido = totalSinConvertir / 1.10;
        break;
}

if (esNuevo) {
    alert(`Por ser su primera compra le regalamos un descuento del 10%. En vez de valer ${signoDivisa}${totalConvertido},  su compra ahora vale vale: ${signoDivisa}${0.9 * totalConvertido}`);
    totalConvertido = 0.9 * totalConvertido;
}


let deseaCuotas = prompt('¿Desea pagar con cuotas?(S/N)');
while (deseaCuotas != 'n' && deseaCuotas != 'N' && deseaCuotas != 'S' && deseaCuotas != 's') {
    deseaCuotas = prompt('Ingrese una opción válida(S/N)');
}
if (deseaCuotas == 'S' || deseaCuotas == 's') {
    let cuotas = parseInt(prompt('Ingrese en la cantidad de cuotas que desea pagar(3,6,12,24): '));
    while (cuotas != 3 && cuotas != 6 && cuotas != 12 && cuotas != 24) {
        cuotas = parseInt(prompt('Cantidad de cuotas inválida, estas solo pueden ser 3,6,12 o 24. Vuelva a ingresar la cantidad: '));
    }
    let cuotaUnica = calcularCuotas(cuotas,totalConvertido);
    alert(`El pago se realizará en ${cuotas} cuotas de ${signoDivisa}${cuotaUnica}`);
}
else {
    alert(`El precio se pagará en un único pago de: ${signoDivisa}${totalConvertido}`);
}

alert(`${usuario}, gracias por comprar en DBYShirts! Hasta la próxima`);
