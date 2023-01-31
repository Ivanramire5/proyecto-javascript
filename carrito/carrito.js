const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "grid";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class="modal-header-item"Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "x";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${product.img}">
            <h3>${product.nombre}</h3>
            <p>${product.precio} $</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = docuent.createElement("span");
        eliminar.innerText = "❌";
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        borrar.addEventListener("click", eliminarProductos)
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const compraTotal = document.createElement("div");
    compraTotal.className = "total-content";
    compraTotal.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(compraTotal);
};

carritoCompra.addEventListener("click", pintarCarrito);