const IVA = 21;

function precioConIva(precioSinIva) {
    return precioSinIva + (precioSinIva * IVA / 100);
}

const envioConCosto = 700;
function precioConEnvio(envioConCosto) {
    return envioConCosto + precioConIva;
}

const envioSinCosto = 000;
function envioSinPrecioAgregado(envioSinCosto) {
    return envioSinCosto + precioConIva;
}

let precioCompra;
do{
    precioCompraIngresado = prompt("Ingrese el producto que quiere comprar, para terminar el pedido escriba ESC");
    const precioCompra = parseFloat(precioCompraIngresado);
    if (! precioCompra){
        break;
    }
    if (precioCompra >= 6000) {
    alert("El envio a domicilio tiene un costo de" + " " + (envioSinCosto));
    } else{
        alert("el envio a domicilio tiene un costo de" + " " + (envioConCosto));
    }
} while (precioCompraIngresado !== "ESC");