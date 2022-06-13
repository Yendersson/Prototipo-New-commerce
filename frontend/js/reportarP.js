let btnRP = document.getElementById("btnRP") ;
console.log(btnRP);
let container = document.querySelector(".containerRP");
console.log(container);

btnRP.addEventListener("click", () => {
    container.innerHTML = 
    ` 
<div class="containerRPjs"> 
    <h2 class="h2RP">
      Gracias por elegirnos! 
      <br>
      Nos contactaremos a la brevedad!
    </h2> 
</div>
  `;
} );