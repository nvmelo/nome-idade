var pessoas = [];

function cadPessoa (nome, idade) {
    
    if(ehNomeRepetido(nome)) {
        window.alert("O nome '" + nome + "' já está cadastrado!");
        return;
    }

    addPessoa(nome, idade);

    novoNome = pessoas[pessoas.length-1].nome;
    novaIdade = pessoas[pessoas.length-1].idade;

    tabela = document.getElementById("tabela");
    var qtdLinhas = tabela.rows.length;
    var linha = tabela.insertRow(qtdLinhas);
    
    var cellNome = linha.insertCell(0);
    var cellIdade = linha.insertCell(1);
    var cellEdita = linha.insertCell(2);
    var cellDeleta = linha.insertCell(3);

    cellNome.innerHTML = novoNome;
    cellIdade.innerHTML = novaIdade;
    cellEdita.innerHTML = cellEdita.innerHTML + "<button type='button'>Editar</button>"
    cellDeleta.innerHTML = cellDeleta.innerHTML + "<button type='button'>Deletar</button>"
}

function ehNomeRepetido (nome) {
    return pessoas.some(value => value.nome === nome);
}

function addPessoa (nome, idade) {
    pessoas.push({
        nome: nome,
        idade: idade
    })
}

