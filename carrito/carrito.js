const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-item"Carrito</h2>
        `;
    modalContainer.append(modalHeader);
    const modalButton = document.createElement("h2");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(modalButton);

//Suma y resta de productos carrito

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <h2 class="text-title">Mi Carrito</h2>
            <span class="delete-product"> X </span>
            <img src="${product.img}">
            <h3 class="text-product">${product.nombre}</h3>
            <p>${product.precio} $</p>
            <span class="restar"> - </span>
            <p>Cantidad: ${product.cantidad}</p>
            <span class="sumar"> + </span>
            <p>Total: ${product.cantidad * product.precio}</p>
        `;
    modalContainer.append(carritoContent);
    let restar = carritoContent.querySelector(".restar");
    restar.addEventListener("click", () => {
        if(product.cantidad !== 1) {
            product.cantidad--;
        }
        saveLocal();
        pintarCarrito();
    });
    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
        product.cantidad++;
        saveLocal();
        pintarCarrito();
    });
    let eliminar = carritoContent.querySelector(".delete-product");
    eliminar.addEventListener("click", ()=> {
        eliminarProductos(product.id);
    })
});
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
    const compraTotal = document.createElement("div");
    compraTotal.className = "total-content";
    compraTotal.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(compraTotal);

    const compraFinal = document.createElement("button");
    compraFinal.className = "paga-total";
    compraFinal.innerHTML = `Ir a pagar`;
    modalContainer.append(compraFinal);

    compraFinal.addEventListener("click", () =>{
        Swal.fire({
            title: "Confirmar el pedido",
            text: "¿Queres confirmar tu pedido?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Compra finalizada",
            cancelButtonText: "Quiero comprar más"
        }).then((reaccion) =>{
            if(reaccion.isConfirmed) {
                location.href = "../html/abono.html"
            }
        })
    })
};
carritoCompra.addEventListener("click", pintarCarrito);


const eliminarProductos = (id) => {
    const foundId = carrito.find((element) => element.id === id);
    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = () => {
    cantidadCarrito.style.display = "block";
    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();