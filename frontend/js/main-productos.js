//obtenemos imagenes 

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