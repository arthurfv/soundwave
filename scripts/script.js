let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})

let btnConfirm = document.querySelector('#verConfirmar')

btnConfirm.addEventListener('click', ()=>{
    let inputConfirm = document.querySelector('#confirmation')

    if(inputConfirm.getAttribute('type') == 'password'){
        inputConfirm.setAttribute('type', 'text')
    }else{
        inputConfirm.setAttribute('type', 'password')
    }
})

let nome = document.querySelector('#name')
let labelNome = document.querySelector('#labelNome')
let validNome = false

nome.addEventListener('keyup', () =>{
    if (nome.value.length <=2) {
    labelNome.setAttribute('style', 'color:red')
    labelNome.innerHTML = 'Nome *Insira no mínimo 3 caracteres'
    nome.setAttribute()
    validNome = false
    }else{
    labelNome.setAttribute('style' ,'color:blue')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color:blue')
    validNome = true
    }
})

let usuario = document.querySelector('#email')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

usuario.addEventListener('keyup', () =>{
    if (usuario.value.length <=1) {
    labelUsuario.setAttribute('style', 'color:red')
    labelUsuario.innerHTML = 'Usuário *Insira no mínimo 2 caracteres'
    usuario.setAttribute()
    validUsuario = false
    }else{
    labelUsuario.setAttribute('style' ,'color:blue')
    labelUsuario.innerHTML = 'Usuario'
    usuario.setAttribute('style', 'border-color:blue')
    validUsuario = true
    }
})

let idade = document.querySelector('#date')
let labelIdade = document.querySelector('labelData')

let senha = document.querySelector('#password')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

senha.addEventListener('keyup', () =>{
    if (senha.value.length <=5) {
    labelSenha.setAttribute('style', 'color:red')
    labelSenha.innerHTML = 'Senha *Insira no mínimo 6 caracteres'
    usuario.setAttribute()
    validSenha = false
    }else{
    labelSenha.setAttribute('style' ,'color:blue')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color:blue')
    validSenha = true
    }
})

let confirmar = document.querySelector('#confirmation')
let labelConfirmar = document.querySelector('#labelConfirmar')
let validConfirmar = false

confirmar.addEventListener('keyup', () =>{
    if (senha.value != confirmar.value) {
    labelConfirmar.setAttribute('style', 'color:red')
    labelConfirmar.innerHTML = 'Confirmar senha *Senhas devem ser iguais'
    confirmar.setAttribute()
    validConfirmar = false
    }else{
    labelConfirmar.setAttribute('style' ,'color:blue')
    labelConfirmar.innerHTML = 'Confirmar senha'
    confirmar.setAttribute('style', 'border-color:blue')
    validConfirmar = true
    }
})

function cadastrar(){
if (validNome && validUsuario && validSenha && validConfirmar) {
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    /*Incremento*/
    listaUser.push({
    nomeCad: nome.value,
    userCad: usuario.value,
    senhaCad: senha.value,
    dataCad: idade.value
    })
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    alert('Sucess')
    window.location.href ='file:///F:/Projeto%20interdeciplinar-Apresenta%C3%A7%C3%A3o/login.html'
}else{
    alert('Preencha os campos corretamente')
}
}
