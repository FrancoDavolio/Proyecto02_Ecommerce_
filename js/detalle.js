//tomar el parametro de la url
let parametro = window.location.search;
console.log(parametro);

let urlParametro = new URLSearchParams(parametro);
console.log(urlParametro.get('codigo'));

//buscar dentro del localstorage el componente que tiene el mismo codigo
let listadeComponentes =
  JSON.parse(localStorage.getItem("listaComponentesKey")) || [];
let componenteBuscado = listadeComponentes.find(
  (producto) => producto.codigo === urlParametro.get("codigo")
);
console.log(componenteBuscado);

//dibujar la card con los datos del componente
let seccionDetalle = document.querySelector("#seccionDetalle");
seccionDetalle.innerHTML = `<div class="card mb-3">
<div class="row justify-content-between">
    <div class="col-md-4">
        <img class="w-100" src="${componenteBuscado.imagen}" alt="${componenteBuscado.nombre}">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${componenteBuscado.nombre}</h5>
            <p class="card-text">${componenteBuscado.descripcion}</p>
            <p class="card-text">Stock: ${componenteBuscado.stock} unidades</p>
            <p class="card-text">Precio: ${componenteBuscado.precio}</p>
            <p class="card-text">Categoria: ${componenteBuscado.categoria}</p>
        </div>
        <div>
                <button class="btn btn-dark"><a class="text-decoration-none text-light" href="../pages/pag404.html">Comprar ahora</a></button>
                <button class="btn btn-dark"><a class="text-decoration-none text-light" href="../pages/pag404.html">Añadir al Carrito</a></button>
        </div>
    </div>
</div>
</div>`
