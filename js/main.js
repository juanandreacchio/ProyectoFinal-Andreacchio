let pedidoFinalizado = false;
let totalSinConvertir = 0;
let esNuevo;

let usuario = prompt('Ingrese su nombre de usuario');
alert(`Bienvenido ${usuario}! Que disfrutes tu visita a la página`);
let primeraVez = prompt('¿Es su primera vez en la página?');
switch (primeraVez){
    case 'si':
        case 'Si':
            esNuevo = true;
            break;
    case 'no':
        case 'No':
            esNuevo = false;
            break;
    default:
        alert('Respuesta Inválida');
        esnuevo = false;
        break;
}

while (!pedidoFinalizado) {
    let infoProducto = prompt('Ingrese el nombre del producto'); 
    let precio = parseInt(prompt('Ingrese el precio del producto')); 
    while (precio < 0){
        precio = parseInt(prompt('Ingrese un precio valido')); 
    }
    totalSinConvertir += precio;
    alert(`Producto agregado correctamente \nNombre: ${infoProducto}\nPrecio: $${precio}\nTotal: $${totalSinConvertir}`); 
    let finalizarPedido = prompt('¿Desea finalizar el pedido?');
    if (finalizarPedido == 'Si' || finalizarPedido == 'si') {
        pedidoFinalizado = true;
    }
}

let divisa = prompt('Ingrese la divisa con la que desea pagar(ARS, USD, EUR): ');
while (divisa != 'ARS' && divisa != 'USD' && divisa != 'EUR') {
    divisa = prompt('Ingrese una divisa válida: ');
}
let totalConvertido;
let signoDivisa;
switch (divisa) {
    case 'USD':
        signoDivisa = '$';
        totalConvertido = totalSinConvertir;
        break;
    case 'ARS':
        signoDivisa = 'ARS';
        totalConvertido = totalSinConvertir * 410; //Precio dolar tarjeta a 4 de mayo de 2023
        break;
    case 'EUR':
        signoDivisa = '€';
        totalConvertido = totalSinConvertir / 1.10;
        break;
}

if (esNuevo){
    alert(`Por ser su primera compra le regalamos un descuento del 10%. En vez de valer ${signoDivisa}${totalConvertido},  su compra ahora vale vale: ${signoDivisa}${0.9 * totalConvertido}`);
    totalConvertido = 0.9 * totalConvertido;
}


let deseaCuotas = prompt('¿Desea pagar con cuotas?');
if (deseaCuotas == 'Si' || deseaCuotas == 'si') {
    let cuotas = parseInt(prompt('Ingrese en la cantidad de cuotas que desea pagar(3,6,12,24): '));
    while (cuotas != 3 && cuotas != 6 && cuotas != 12 && cuotas != 24) {
        cuotas = parseInt(prompt('Cantidad de cuotas inválida, estas solo pueden ser 3,6,12 o 24. Vuelva a ingresar la cantidad: '));
    }
    switch (cuotas) {
        case 3:
            alert(`El pago se realizara en 3 cuotas de: ${signoDivisa}${totalConvertido / 3}`);
            break;
        case 6:
            alert(`El pago se realizara en 6 cuotas de: ${signoDivisa}${totalConvertido / 6}`);
            break;
        case 12:
            alert(`El pago se realizara en 12 cuotas de: ${signoDivisa}${totalConvertido / 12}`);
            break;
        case 24:
            alert(`El pago se realizara en 24 cuotas de: ${signoDivisa}${totalConvertido / 24}`);
            break;
    }
}
else{
    alert(`El precio se pagará en un único pago de: ${signoDivisa}${totalConvertido}`);
}

alert(`${usuario}, gracias por comprar en DBYShirts! Hasta la próxima`);
