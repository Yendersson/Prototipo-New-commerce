const _main = document.querySelector('#template');
const _header = document.querySelector('header');
const _footer = document.querySelector('footer')

cargar('vistas/navbar.html', _header, navegar);
cargar('vistas/home.html', _main, handle, bienvenida, banner)
cargar('vistas/footer.html', _footer, navegar);




