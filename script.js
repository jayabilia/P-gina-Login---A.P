btnlogin = document.getElementById("btn-login")
nome = document.getElementById("usuario")
senha = document.getElementById("senha")



btnlogin.addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value == "admin" && senha.value == "admin"){
        mensagem.classList.remove("Senha incorreta")
        mensagem.innerHTML = "Bem vindo"        
        mensagem.classList.add("Senha correta!")

    }  else {
        mensagem.innerHTML = ("Senha incorreta")
        mensagem.classList.remove("Senha correta")
        mensagem.classList.add("Senha incorreta")
    }
})