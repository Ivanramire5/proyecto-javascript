

const productAmerican = [
    {
        id: 1, nombre: "Andy capps bbq", cantidad: 1, desc: "Snacks de bbq", precio: 525, img: "../Imagenes de dulces americanos/snacks-americanos/andy-capps-bbq-fries.jpg",
    },
    {
        id: 2, nombre: "Bigs seeds buffalo", cantidad: 1, desc: "Semillas de girasol con salsa bufalo", precio: 500, img: "../Imagenes de dulces americanos/snacks-americanos/bigs-sunflower-seeds-frank-s-red-hot-buffalo-wing.jpg",
    },
    {
        id: 30, nombre: "Lays bacon", cantidad: 1, desc: "Papas fritas sabor panceta", precio: 600, img: "../Imagenes de dulces americanos/snacks-americanos/lays-bacon.jpg",
    },
    {
        id: 4, nombre: "Cheetos crunchy", cantidad: 1, desc: "Snacks de maiz horneados sabor queso fuerte", precio: 550, img: "../Imagenes de dulces americanos/snacks-americanos/cheetos-crunchies.jpg",
    },
    {
        id: 5, nombre: "cheetos jam and cheese", cantidad: 1, desc: "Snacks horneados sabor jamon y queso", precio: 550, img: "../Imagenes de dulces americanos/snacks-americanos/cheetos-crunchos-ham-cheese.jpg",
    },
    {
        id: 6, nombre: "Cheetos jalapeno", cantidad: 1, desc: "Snacks horneados sabor jalapeno y queso cheddar", precio: 550, img: "../Imagenes de dulces americanos/snacks-americanos/cheetos-jalapeno.jpg",
    },
    {
        id: 7, nombre: "7up Cherry", cantidad: 1, desc: "Gaseosa sabor cereza", precio: 450, img: "../Imagenes de dulces americanos/bebidas-americanas/7up-cherry.jpg",
    },
    {
        id: 8, nombre: "Butter beer", cantidad: 1, desc: "Cerveza de mantequilla", precio: 450, img: "../Imagenes de dulces americanos/bebidas-americanas/butter-beer.jpg",
    },
    {
        id: 9, nombre: "Coca cola cherry vainilla", cantidad: 1, desc: "Coca cola de cereza y vainilla", precio: 500, img: "../Imagenes de dulces americanos/bebidas-americanas/coca-cola-cherry-vanilla.jpg",
    },
    {
        id: 10, nombre: "Fanta berry", cantidad: 1, desc: "Gaseosa sabor frutos rojos", precio: 500, img: "../Imagenes de dulces americanos/bebidas-americanas/fanta-berry.jpg",
    },
    {
        id: 11, nombre: "Arizona raspberry", cantidad: 1, desc: "Té helado con jugo de frambuesa", precio: 500, img: "../Imagenes de dulces americanos/bebidas-americanas/arizona-raspberry.jpg",
    },
    {
        id: 12, nombre: "Arizona watermelon", cantidad: 1, desc: "Té helado con jugo de sandia", precio: 500, img: "../Imagenes de dulces americanos/bebidas-americanas/arizona-sandia.jpg",
    },
    {
        id: 13, nombre: "Babol tongue", cantidad: 1, desc: "Chicles sabor a fruta", precio: 500, img:  "../Imagenes de dulces americanos/golosinas-americanas/babol-tongue.jpg",
    },
    {
        id: 14, nombre: "Airheads strawberry", cantidad: 1, desc: "Caramelos sabor a frutilla", precio: 530, img: "../Imagenes de dulces americanos/golosinas-americanas/airheads-frutilla.jpg",
    },
    {
        id: 15, nombre: "Airheads gummies", cantidad: 1, desc: "Gomitas sabor a fruta", precio: 500, img: "../Imagenes de dulces americanos/golosinas-americanas/airheads-gummies.jpg",
    },
    {
        id: 16, nombre: "Airheads green apple", cantidad: 1, desc: "Caramelo sabor a manzana", precio: 500, img: "../Imagenes de dulces americanos/golosinas-americanas/airheads-manzana.jpg",
    },
    {
        id: 17, nombre: "Airheads watermelon", cantidad: 1, desc: "Caramelos sabor sandia", precio: 500, img: "../Imagenes de dulces americanos/golosinas-americanas/airheads-sandia.jpg",
    },
    {
        id: 18, nombre: "Airheads mistery", cantidad: 1, desc: "Caramelos sabor a fruta", precio: 500, img: "../Imagenes de dulces americanos/golosinas-americanas/airheads.jpg",
    },
    {
        id: 19, nombre: "Demets turtles", cantidad: 1, desc: "Bocaditos de chocolate con forma de tortuga", precio: 650, img: "../Imagenes de dulces americanos/chocolates-americanos/Demets-Turtles-King-Size.jpg"
    },
    {
        id: 20, nombre: "Apple pie kit-kat", cantidad: 1, desc: "Oblea bañada en chocolate sabor tarta de manzana", precio: 600, img: "../Imagenes de dulces americanos/chocolates-americanos/apple_pie_kitkat.jpg",
    },
    {
        id: 21, nombre: "Baby ruth", cantidad: 1, desc: "Barra de chocolate con relleno de frutos secos", precio: 600, img: "../Imagenes de dulces americanos/chocolates-americanos/babyruth.jpg",
    },
    {
        id: 22, nombre: "Bruncha crunch", cantidad: 1, desc: "Bocaditos crujientes de chocolate y arroz inflado", precio: 700, img: "../Imagenes de dulces americanos/chocolates-americanos/bruncha-crunch.jpg",
    },
    {
        id: 23, nombre: "Cherry ripe", cantidad: 1, desc: "Barra de chocolate con relleno sabor a cereza", precio: 600, img: "../Imagenes de dulces americanos/chocolates-americanos/cherry-ripe.jpg",
    },
    {
        id: 24, nombre: "Kitkat dark mint", cantidad: 1, desc: "Oblea bañada en chocolate sabor a menta", precio: 600, img: "../Imagenes de dulces americanos/chocolates-americanos/kit-kat-mint-dark.jpg",
    },
    {
        id: 29, nombre: "Hersheys gold", cantidad: 1, desc: "Chocolate blanco sabor caramelo", precio: 600, img: "../Imagenes de dulces americanos/chocolates-americanos/hershey_s_gold_candy_bar.jpg"
    },
    {
        id: 25, nombre: "Oreos carrot", cantidad: 1, desc: "Oreos de torta de zanahoria", precio: 1200, img: "../Imagenes de dulces americanos/oreos/oreo-carrot.jpg",
    },
    {
        id: 26, nombre: "Oreos caramel apple", cantidad: 1, desc: "Oreos sabor manzana y caramelo", precio: 1200, img: "../Imagenes de dulces americanos/oreos/oreo-apple-caramel.jpg",
    },
    {
        id: 27, nombre: "Oreos blueberry pie", cantidad: 1, desc: "Oreos sabor pie de arandanos", precio: 1200, img: "../Imagenes de dulces americanos/oreos/oreo-blueb.jpg",
    },
    {
        id: 31, nombre: "Oreos cinnamon bun", cantidad: 1, desc: "Sabrosas oreos sabor rol de canela", precio: 1200, img: "../Imagenes de dulces americanos/oreos/oreo-canela.jpg",
    },
];