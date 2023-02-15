const botonFinal = document.getElementById("boton-finalizar")
botonFinal.addEventListener("click", () => {
    Swal.fire({
        title: "¿Va a finalizar su pedido?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Terminar compra",
        cancelButtonText: "Quiero seguir commprando"
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            Swal.fire({
                title: "Eliminado",
                icon: "success",
                text: "la compra acaba de ser eliminada"
            })
        }
    })
})