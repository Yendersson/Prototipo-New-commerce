function register(){
    const form = document.querySelector('#form-register');
    let btnRegister = document.querySelector('#btn-register');



    btnRegister.addEventListener('click', (e)=>{
        e.preventDefault();

        fetch("https://ncapirest.glitch.me//newcommerce/v1/user/register",{
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            password: form.password.value
        })
        })
        .then(res=>res.json())
        .then(data=>{

            if(data.error = null){
            console.log(data)
            // console.log(data.usuario.name);
            }else{
                document.querySelector('#alerta').innerHTML = data.error
            }
        })

    })
}
