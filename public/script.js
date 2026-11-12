function enviarDados(){
    let nome = document.getElementById("nome").value
    let sobrenome = document.getElementById("sobrenome").value
    let email = document.getElementById("email").value

    fetch('/pessoas').then(resposta => resposta.json()).then(dados => {
        let usuario = dados.find(pessoas => pessoas.nome == nome && pessoas.sobrenome == sobrenome && pessoas.email == email)
        if (usuario) {
            window.location.href = 'boasVindas.html'
        } else {
            alert('Usuário/email Incorretos! Tente Novamente')
        }
    })
}