fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCPF = document.createElement('td')

            //Preenche as celula da linha com as informações
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCPF.innerText = objeto.cpf

            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCPF)
            tabelaCorpo.appendChild(tr)
        })
    })