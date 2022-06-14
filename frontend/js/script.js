// MOBILE MENU VARIABLES

function botons(){
// MOBILE MENU VARIABLES
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');



for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    // MOBILE MENU FUNCTION
    const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    });

    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
    overlay.addEventListener('click', mobileMenuCloseFunc);
}


// ACCORDION VARIABLES
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');



for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break;
            if (accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');

            }

        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

    });
}

}

function banner(){
    let slideIndex = 1;
showSlides(slideIndex);

//  NEXT/PREVIOUS
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// THUMBNAIL IMAGE CONTROL
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Banner");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/**
 * back to top
 */

 const backTopBtn = document.querySelector("[data-back-top-btn]");

 window.addEventListener("scroll", function () {
   window.scrollY >= 100 ? backTopBtn.classList.add("active"): backTopBtn.classList.remove("active");
 });

}


//NAVIGATIONS
function cargar(url, etiqueta, adicional, adicional1, adicional2){
    let xhr = ajax(url);
    xhr.addEventListener('load', ()=>{
        if(xhr.status == 200){
            etiqueta.innerHTML = xhr.response;
            if(adicional){
                adicional()
            }
            if(adicional1){
                adicional1()
            }
            if(adicional2){
                adicional2()
            }
        }
    })
}

function navegar(){
    botons()
    modal()
    filtro()
    input()
    // carrito()
    // banner()
    const links = document.querySelectorAll('.select');
    console.log(links)

    links.forEach(link => {
        link.addEventListener('click', e=>{
            e.preventDefault();
            console.log(link.dataset.id);
            let archivo = `vistas/${link.dataset.id}.html`;
            let xhr = ajax(archivo);
            xhr.addEventListener('load', ()=>{
                if(xhr.status == 200){
                    _main.innerHTML = xhr.response;
                    datos()
                    // banner()
                    
                    // productos()
                    // handle()
                }
            })
        })
    });
}

function productos(){
    const articulos = document.querySelectorAll('.busqueda-articulo-desktop');
    console.log(articulos);
    articulos.forEach(producto => {
        producto.addEventListener('click', ()=> {
            let id = producto.dataset.id;
            console.log(id);
            let xhr = ajax(`vistas/productos.html`)
            xhr.addEventListener('load', ()=>{
                if(xhr.status == 200){
                    _main.innerHTML = xhr.response;
                    datos(id)
                    
                }
            })
        })
    })

}

function modalCarrito(){

        let modal = document.getElementById('compra');
        modal.addEventListener('click', ()=>{
            console.log('botoon');
            document.querySelector('.Pago-carrito-carrito').classList.add('show');
        })

        document.querySelector('#cerrar').addEventListener('click', (e)=>{
            e.preventDefault()
            document.querySelector('.Pago-carrito-carrito').classList.remove('show');

        })

        document.querySelector('#comprado').addEventListener('click', ()=>{
            location.href = 'index.html'
        })
        
        // document.querySelector('#close').addEventListener('click', (e)=>{
        //     e.preventDefault();
        //     document.querySelector('.modal').classList.remove('modal-show');
        
        // })
        
        // document.querySelector('#form').addEventListener('submit', (e)=>{
        //     e.preventDefault()
        // })
        }


function handle(datos){
    let plantilla = _main.innerHTML;
    let compilar = Handlebars.compile(plantilla);
    document.querySelector('#template-compilado').innerHTML = compilar(datos);
    productos()
    // banner()

}

function datos(id){
    if(id){
        let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/'+ id);
        xhrData.addEventListener('load', ()=>{
            if(xhrData.status === 200){
                let parseoJson = JSON.parse(xhrData.response);
                console.log(parseoJson)
                handle(parseoJson);
                imgProductos()
    
            }
        })

    }else{
        let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products');
        xhrData.addEventListener('load', ()=>{
            if(xhrData.status === 200){
                let parseoJson = JSON.parse(xhrData.response);
                console.log(parseoJson)
                // const filtro = parseoJson.filter(elemento => elemento.categoria == categorias);
                // console.log(filtro)
                handle(parseoJson);
                faq()
                bienvenida()
                modalCarrito()
                banner()
                
            }
        })
    }
    
    }

function input(){
    const buscar = document.querySelector('#search');
    let btnBuscar = document.querySelector('#search-btn');

    btnBuscar.addEventListener('click', ()=>{
        if(!buscar.value == ''){
           
            cargar('vistas/busqueda.html', _main, datosBuscar(buscar.value));
        }else{
            alert('vacio');
        }
    })
}


function filtro(){
    let categorias = document.querySelectorAll('.filtro');
    categorias.forEach(cat => {
        cat.addEventListener('click', (e)=>{
            e.preventDefault()
            let categoria = cat.dataset.id;
            cargar('vistas/busqueda.html', _main, datosFiltro(categoria))
        })
    })
}

function datosFiltro(categoria){
    let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/');
    xhrData.addEventListener('load', ()=>{
        if(xhrData.status === 200){
            let parseoJson = JSON.parse(xhrData.response);
            console.log(parseoJson)
            const filtro = parseoJson.filter(elemento => elemento.categoria == categoria);
            handle(filtro);
}
    })
}

function datosBuscar(categoria){
    let xhrData = ajax('https://ncapirest.glitch.me/newcommerce/v1/products/');
    xhrData.addEventListener('load', ()=>{
        if(xhrData.status === 200){
            let parseoJson = JSON.parse(xhrData.response);
            console.log(parseoJson)
            const filtro = parseoJson.filter(elemento => elemento.nombre == categoria);
            handle(filtro);
}
    })
}



function ajax(url, method = 'get'){
    let xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.send();

    return xhr;
}


//MODAL

function modal(){

    let modal = document.querySelectorAll('.inicio');
    modal.forEach(boton =>{
        boton.addEventListener('click', ()=>{
            document.querySelector('.modal').classList.add('modal-show');
        })
    })
    
    
    document.querySelector('#close').addEventListener('click', (e)=>{
        e.preventDefault();
        document.querySelector('.modal').classList.remove('modal-show');
    
    })
    
    document.querySelector('#form').addEventListener('submit', (e)=>{
        e.preventDefault()
    })
    }

    login()
    register()

    function bienvenida(){
        if(localStorage.getItem('user')){
            if(document.querySelector('#welcome-user'))
        document.querySelector('#welcome-user').innerHTML = `Hola bienvenid@ ${localStorage.getItem('user')}`
        }
    }
    // PRODUCTOS

    function imgProductos(){
        let imgP = document.querySelector(".imgPrincipalProducto");
        let imgUno = document.querySelector(".imgSrc1");
        let imgDos = document.querySelector(".imgSrc2");
        let imgTres = document.querySelector(".imgSrc3");
        let imgCuatro = document.querySelector(".imgSrc4");
       
       // por medio del evento click intercambiamos el src de cada imagen 
       // y de esa manera visulizar la imagen solicitada.
       
        imgUno.addEventListener("click",
         function (){ 
          imgP.src = imgUno.src
       })
        imgDos.addEventListener("click",
         function (){ 
          imgP.src = imgDos.src
       })
        imgTres.addEventListener("click",
         function (){ 
          imgP.src = imgTres.src
       })
        imgCuatro.addEventListener("click",
         function (){ 
          imgP.src = imgCuatro.src
       })
        imgP.addEventListener("click",
         function (){ 
          imgP.src = imgUno.src
       })
       }

       //FAQ

       function faq(){

        let question = document.querySelectorAll(".question ");
        let btnDropdown = document.querySelectorAll(".question .more");
        let answer = document.querySelectorAll(".answer");
        let parrafo = document.querySelectorAll(".answer p");
        
        for( let i = 0 ; i < btnDropdown.length; i ++) {
        
            let altoParrafo = parrafo[i].clientHeight;
            let switchc = 0;
        
        btnDropdown[i].addEventListener("click", () => {
        
            if (switchc == 0 ) {
        
                answer[i].style.height =  altoParrafo +'px'; 
                question[i].style.marginBottom ="10px"
                btnDropdown[i].innerHTML = "<i>-</i>" ;
                switchc ++;
            }
        
            else if (switchc == 1) {
        
                answer[i].style.height = "0";
                question[i].style.marginBottom = "0" ;
                btnDropdown[i].innerHTML = "<i>+</i>";
                switchc --; 
            }
        })
        }
        }

  
  
