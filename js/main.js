
//Items en venta del e-commerce//

const productosEnVenta = [
    { nombre: "Oreos", precio: 600 },
    { nombre: "Snacks", precio: 500 },
    { nombre: "Chocolates", precio: 700 },
    { nombre: "Bebidas", precio: 550 },
    { nombre: "Ramen", precio: 900 },
    { nombre: "Golosinas", precio: 530 },
    { nombre: "Mochis", precio: 830 },
];
let carritoDeCompras = []

let seleccionDeProductos = prompt("Hola, ¿desea comprar algo? si o no");
while(seleccionDeProductos != "si" && seleccionDeProductos != "no"){
    alert("selecciona si o no");
    seleccionDeProductos = prompt("hola, desea comprar algo si o no");
}

if(seleccionDeProductos == "si"){
    alert("a continuacion nuestra lista de delicias del mundo que tenemos para ofrecerle");
    let seleccionDeProductos = productosEnVenta.map(
        (productosEnVenta) => productosEnVenta.nombre + " " + productosEnVenta.precio + "$"
    );
alert(seleccionDeProductos.join(" - "));
} else if (seleccionDeProductos === "no"){
    alert("gracias por pasarse por nuestra tienda");
}
while(seleccionDeProductos != "no"){
    let productosEnVenta = prompt("agrega un producto a tu carrito de compras");
    let precio = 0;

    if(productosEnVenta == "Oreos" || productosEnVenta == "Snacks" || productosEnVenta == "Chocolates" || productosEnVenta == "Bebidas" || productosEnVenta == "Ramen" || productosEnVenta == "Golosinas" || productosEnVenta == "Mochis"){
        switch(productosEnVenta) {
            case "Oreos":
                precio = 600
                break;
            case "Snacks":
                precio = 500
                break;
            case "Chocolates":
                precio = 700
                break;
            case "Bebidas":
                precio = 550
                break;
            case "Ramen":
                precio = 900
                break;
            case "Golosinas":
                precio = 530
                break;
            case "Mochis":
                precio = 830
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("Cuantas unidades quiere llevar"));
    carritoDeCompras.push({productosEnVenta, unidades, precio});
    console.log(carritoDeCompras)
    } else {
        alert("No tenemos ese producto ahora mismo")
    }

    seleccionDeProductos = prompt("¿Desea seguir comprando?")
    while(seleccionDeProductos === "no"){
        alert("gracias por su compra. Tenga un buen dia")
        carritoDeCompras.forEach((carritoFinal) => {
            console.log(`productosEnVenta: "${carritoFinal.productosEnVenta}", unidades: "${carritoFinal.unidades}",total a pagar por producto "${carritoFinal.unidades * carritoFinal.precio}"`)
        })
    break;
    }
}

const total = carritoDeCompras.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(`el total a pagar por su compra es: "${total}"`);
alert("El precio de tu compra tiene un valor de:" + " " + total + "pesos")
//Precio de compra total//

let precioDeCompra;
do{
    precioCompraIngresado = prompt("Ingrese el producto que quiere comprar, para terminar el pedido escriba ESC");
    const precioDeCompra = parseFloat(precioCompraIngresado);
    if(! precioDeCompra){
        break;
    }
    if (precioDeCompra >= 6000) {
    alert("El envio a domicilio tiene un costo de" + " " + (envioSinCosto));
    } else{
        alert("el envio a domicilio tiene un costo de" + " " + (envioConCosto));
    }
} while (precioCompraIngresado !== "ESC");

