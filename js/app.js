window.addEventListener('load', function () {
  new Glider(document.querySelector('.carousel__lista'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.carousel__indicadores',
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__siguiente',
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
    ],
  })
})

let listadeComponentes =
  JSON.parse(localStorage.getItem('listaComponentesKey')) || []
let padre = document.querySelector('#grillaProducto')

if (listadeComponentes.length > 0) {
  listadeComponentes.map((producto) => {
    crearColumna(producto)
  })
} else {
  padre.innerHTML = '<h2 class="text-center">No hay productos cargadas</h2>'
}

function crearColumna(producto) {
  padre.innerHTML += ` <article class="card col-md-3 m-3" style="width: 18rem;">
  <img src="${producto.imagen}" class="card-img-top h-100 w-100" alt="${producto.nombre}">
  <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Precio:${producto.precio} </p>
      <p class="card-text">Categoria: ${producto.categoria} </p>
      <button class="btn btn-primary" type="button" onclick="verDetalle('${producto.codigo}')">Ver mas</button>
  </div>
</article>`
}

function verDetalle(codigo) {
  window.location.href =
    window.location.origin + '/pages/verDetalle.html?codigo=' + codigo
}

function buscar() {
  let input, filter, section, articles, h5, i
  input = document.getElementById('inputBuscar')
  filter = input.value.toUpperCase()
  section = document.getElementById('mySection')
  articles = section.getElementsByTagName('article')

  for (i = 0; i < articles.length; i++) {
    h5 = articles[i]
      .getElementsByClassName('card-body')[0]
      .getElementsByClassName('card-title')
    if (h5) {
      let palabrasEnFiltro = filter.split(' ')

      for (let filtro of palabrasEnFiltro) {
        if (h5[0].innerHTML.toUpperCase().indexOf(filter) > -1) {
          articles[i].style.display = 'flex'
        } else {
          articles[i].style.display = 'none'
        }
      }
    }
  }
}

function filtercat(categoria) {
  let section, articles, i, categoriaarticle
  section = document.getElementById('mySection')
  articles = section.getElementsByTagName('article')
  for (i = 0; i < articles.length; i++) {
    categoriaarticle = articles[i]
      .getElementsByClassName('card-body')[0]
      .getElementsByClassName('card-text')[1].innerHTML
    if (categoriaarticle) {
      let arrayCategoria = categoriaarticle.split(' ')
      for (let filtro of arrayCategoria) {
        if (
          categoriaarticle.toUpperCase().indexOf(categoria.toUpperCase()) > -1
        ) {
          articles[i].style.display = 'flex'
        } else {
          articles[i].style.display = 'none'
        }
      }
    }
  }
}
