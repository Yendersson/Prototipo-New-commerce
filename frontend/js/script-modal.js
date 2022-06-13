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