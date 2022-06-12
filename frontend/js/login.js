function login(){
    const form = document.querySelector('#form');
    let btnLogin = document.querySelector('#btn-login');



    btnLogin.addEventListener('click', (e)=>{
        e.preventDefault();

        fetch("https://ncapirest.glitch.me//newcommerce/v1/user/login",{
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: form.email.value,
            password: form.password.value
        })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // console.log(data.usuario.name);
            if(data.error == null){
                location.href = 'index.html';
                localStorage.setItem('user', data.usuario.name);

            }else{
                document.querySelector('#alerta').innerHTML = data.error
            }
        })

    })
}
