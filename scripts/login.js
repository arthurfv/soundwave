let butt = document.querySelector('.fa-eye')

butt.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    if (inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type' , 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar() {
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let messageError = document.querySelector('#messageError')

    let listaUser = []

    //Objetos com campos pre-determinados
    let userValid = {
        nome: '',
        user: '',
        senha: '',
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    /*Validação do usuario cadastrado*/
    listaUser.forEach((item) => {
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {
            userValid ={
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })

    if (usuario.value == userValid.user && senha.value == userValid.senha) {
        alert('Bem vindo')
        window.location.href= 'file:///J:/Projeto%20interdeciplinar-Apresenta%C3%A7%C3%A3o/biblioteca.html'

    //token
    let token =Math.random().toString(10).substring(2)
    localStorage.setItem('token', token) 

    }else{
        alert ('Login ou senha incorretos')
        usuario.focus()
    }
}