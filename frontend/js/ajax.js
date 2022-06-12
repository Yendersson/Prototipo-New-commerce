const _main = document.querySelector('#template');
const _header = document.querySelector('header');
const _footer = document.querySelector('footer')

cargar('vistas/navbar.html', _header, navegar);
cargar('vistas/home.html', _main, handle, bienvenida)
cargar('vistas/footer.html', _footer, navegar);


// function cargar(url, etiqueta, adicional){
//     let xhr = ajax(url);
//     xhr.addEventListener('load', ()=>{
//         if(xhr.status == 200){
//             etiqueta.innerHTML = xhr.response;
//             if(adicional){
//                 adicional()
//             }
//         }
//     })
// }

// function navegar(){
//     botons()
//     modal()
//     filtro()
//     input()
//     const links = document.querySelectorAll('.select');
//     console.log(links)

//     links.forEach(link => {
//         link.addEventListener('click', e=>{
//             e.preventDefault();
//             console.log(link.dataset.id);
//             let archivo = `vistas/${link.dataset.id}.html`;
//             let xhr = ajax(archivo);
//             xhr.addEventListener('load', ()=>{
//                 if(xhr.status == 200){
//                     _main.innerHTML = xhr.response;
//                     datos()
//                     // productos()
//                     // handle()
//                 }
//             })
//         })
//     });
// }


// function productos(){
//     const articulos = document.querySelectorAll('.busqueda-articulo-desktop');
//     console.log(articulos);
//     articulos.forEach(producto => {
//         producto.addEventListener('click', ()=> {
//             let id = producto.dataset.id;
//             console.log(id);
//             let xhr = ajax(`vistas/productos.html`)
//             xhr.addEventListener('load', ()=>{
//                 if(xhr.status == 200){
//                     _main.innerHTML = xhr.response;
//                     datos(id)
                    
//                 }
//             })
//         })
//     })

// }

// function handle(datos){
//     let plantilla = _main.innerHTML;
//     let compilar = Handlebars.compile(plantilla);
//     document.querySelector('#template-compilado').innerHTML = compilar(datos);
//     productos()

// }

// function datos(id){
//     if(id){
//         let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/'+ id);
//         xhrData.addEventListener('load', ()=>{
//             if(xhrData.status === 200){
//                 let parseoJson = JSON.parse(xhrData.response);
//                 console.log(parseoJson)
//                 handle(parseoJson);
//                 imgProductos()
    
//             }
//         })

//     }else{
//         let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products');
//         xhrData.addEventListener('load', ()=>{
//             if(xhrData.status === 200){
//                 let parseoJson = JSON.parse(xhrData.response);
//                 console.log(parseoJson)
//                 // const filtro = parseoJson.filter(elemento => elemento.categoria == categorias);
//                 // console.log(filtro)
//                 handle(parseoJson);
//                 faq()
//             }
//         })
//     }
    
//     }

// function input(){
//     const buscar = document.querySelector('#search');
//     let btnBuscar = document.querySelector('#search-btn');

//     btnBuscar.addEventListener('click', ()=>{
//         if(!buscar.value == ''){
           
//             cargar('vistas/busqueda.html', _main, datosBuscar(buscar.value));
//         }else{
//             alert('vacio');
//         }
//     })
// }


// function filtro(){
//     let categorias = document.querySelectorAll('.filtro');
//     categorias.forEach(cat => {
//         cat.addEventListener('click', (e)=>{
//             e.preventDefault()
//             let categoria = cat.dataset.id;
//             cargar('vistas/busqueda.html', _main, datosFiltro(categoria))
//         })
//     })
// }

// function datosFiltro(categoria){
//     let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/');
//     xhrData.addEventListener('load', ()=>{
//         if(xhrData.status === 200){
//             let parseoJson = JSON.parse(xhrData.response);
//             console.log(parseoJson)
//             const filtro = parseoJson.filter(elemento => elemento.categoria == categoria);
//             handle(filtro);
// }
//     })
// }

// function datosBuscar(categoria){
//     let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/');
//     xhrData.addEventListener('load', ()=>{
//         if(xhrData.status === 200){
//             let parseoJson = JSON.parse(xhrData.response);
//             console.log(parseoJson)
//             const filtro = parseoJson.filter(elemento => elemento.nombre == categoria);
//             handle(filtro);
// }
//     })
// }



// function ajax(url, method = 'get'){
//     let xhr = new XMLHttpRequest;
//     xhr.open(method, url);
//     xhr.send();

//     return xhr;
// }



