const contenedorCarta = document.getElementById("shopContent");
const carritoCompra = document.getElementById("carritoCompra");
const modalContainer = document.getElementById("modal-container");
const showAlert = document.getElementById("showAlert");
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productAmerican.forEach((product) => {
    let content = document.createElement("div");
    contenedorCarta.className = "shop-content"
    content.innerHTML = `
    <div class="card">
        <img src="${product.img}">
        <h5 class="card-title">${product.nombre}</h5>
        <p class="card-text">${product.desc}</p>
        <p class="card-text">Cantidad:${product.cantidad}</p>
        <p class="precio">Precio:${product.precio} $</p>
        </div>
    </div>
    `;
    contenedorCarta.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar"
    comprar.className = "comprar"

    content.append(comprar)

    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

    if (repeat) {
        carrito.map((prod) => {
            if (prod.id === product.id) {
                prod.cantidad++;
            }
        });
    } else {
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            });
            console.log(carrito);
            console.log(carrito.length);
            carritoCounter();
            saveLocal();
        }
        });
    });
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
