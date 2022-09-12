window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicadores",
    arrows: {
      prev: ".carousel__anterior",
      next: ".carousel__siguiente",
    },
    responsive: [
        {
          // screens greater than >= 500px
          breakpoint: 500,
          settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          }
        }
      ]
  });
});


// verrificar el localStorage
let listadeComponentes = JSON.parse(localStorage.getItem("listaComponentesKey")) || [];
let padre = document.querySelector("#grillaProducto");

if (listadeComponentes.length > 0) {
  listadeComponentes.map((producto) => {
    crearColumna(producto);
  });
} else {
  padre.innerHTML = '<h2 class="text-center">No hay productos cargadas</h2>';
}

function crearColumna(producto){
  console.log(producto);
  padre.innerHTML += ` <div class="card col-md-3 m-3" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
  <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Precio:${producto.precio} </p>
      <button class="btn btn-primary" type="button" onclick="verDetalle(´${producto.codigo}´)">Ver mas</button>
  </div>
</div>`;
}
