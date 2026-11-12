function buscarDados() {
    var cpf = document.getElementById('identificadorCPF').value 

    fetch('/pessoas', {
        method: 'GET'
    })
    .then(resposta => resposta.json())
    .then(dados => {
        let pessoaEncontrada = dados.find(pessoa => pessoa.cpf == cpf) 

        if(pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('sobrenomeAtualizar').value = pessoaEncontrada.sobrenome
            document.getElementById('identificadorCPF').value = pessoaEncontrada.cpf 
            document.getElementById('identificador').value = pessoaEncontrada.id 
        } else {
            alert("Pessoa não encontrada.")
        }
    })
}

function atualizarDados() {
    var id = document.getElementById('identificador').value 
    var cpf = document.getElementById('identificadorCPF').value 
    var nome = document.getElementById('nomeAtualizar').value
    var sobrenome = document.getElementById('sobrenomeAtualizar').value

    fetch(`/pessoas/${id}`, {
        method: 'PATCH', //PATCH atualiza só esses campos e mantém o resto (senha, email...)
        headers: {
            'Content-Type': 'application/json' //Tipo de conteudo enviado JSON
        },
        body: JSON.stringify({nome: nome, sobrenome: sobrenome, cpf: cpf}) //Dados a serem enviados e convertidos 
    })
    .then(resposta => resposta.json()) //Converte a resposta para JSON
    .then(() => alert('Atualizado com sucesso!'))
     .then(resposta => {
        if (resposta.certo) {
            alert('Cadastro atualizado!')
        } else {
            alert('Não foi possível atualizar o cadastro.')
        }
    })
}