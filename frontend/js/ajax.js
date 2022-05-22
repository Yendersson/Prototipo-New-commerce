const _header = document.querySelector('header');
const _main = document.querySelector('main');
const _footer = document.querySelector('footer')


let xhr = ajax('vistas/navbar.html');
xhr.addEventListener('load', ()=>{
    xhr.status == 200? _header.innerHTML = xhr.response: console.log('error')
    modal();
    botons();
    navegar();
    carrito();
    historial();
})

let xhr2 = ajax('vistas/footer.html');
xhr2.addEventListener('load', ()=>{
    xhr2.status == 200? _footer.innerHTML = xhr2.response: console.log('error')
})

let xhr3 = ajax('vistas/home.html');
xhr3.addEventListener('load', ()=>{
    xhr3.status == 200? _main.innerHTML = xhr3.response: console.log('error')
    // history.pushState('','', 'home.html')
})

console.log(location.pathname.slice(10));

//FUNCTIONS


function navegar(){
    const links = document.querySelectorAll('.menu-title');
    links.forEach(link =>{
        link.addEventListener('click', e=>{
            e.preventDefault();
            console.log(link.dataset.id);
            let archivo = 'vistas/' + link.dataset.id + '.html';
            let xhrLinks = ajax(archivo);

            history.pushState('','', link.dataset.id + '.html')

            xhrLinks.addEventListener('load', ()=>{
                xhrLinks.status == 200? _main.innerHTML = xhrLinks.response: console.log('error');
                productos();
                faq()
            })
        })
    })
}


function productos(){
    const _article = document.querySelectorAll('article');

    _article.forEach(articulo => {
        articulo.addEventListener('click', ()=>{
            let xhrProducto = ajax('vistas/productos.html')
            history.pushState('','','productos.html')
            xhrProducto.addEventListener('load', ()=>{
                xhrProducto.status == 200? _main.innerHTML = xhrProducto.response: console.log('error');
                imgProductos()

            })
        })
    })
}

function carrito(){
    let links = document.querySelectorAll('.carrito');
    console.log(links);
    links.forEach(link =>{
        link.addEventListener('click', ()=>{
            let archivo ='vistas/' + link.dataset.id + '.html';
            let xhrCarrito = ajax(archivo);
            history.pushState('','','Carrito.html')
            xhrCarrito.addEventListener('load', ()=>{
                xhrCarrito.status == 200? document.querySelector('main').innerHTML = xhrCarrito.response: console.log('error');

            })

        })
    })
}

function ajax(url, method = 'get'){
    let xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.send()

    return xhr;
}
console.log(location.pathname)
function historial(){
    window.addEventListener('popstate', ()=>{
    let historialBack = 'vistas/'+ location.pathname;
    let xhrHistorial = ajax(historialBack)
    xhrHistorial.addEventListener('load', ()=>{
        xhrHistorial.status == 200? _main.innerHTML = xhrHistorial.response: console.log('error');
    })    
    })
}