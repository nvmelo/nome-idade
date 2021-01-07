var pessoas = [];
tabela = document.getElementById("tabela");

function cadPessoa (nome, idade) {
    
    if(ehNomeRepetido(nome)) {
        window.alert("O nome '" + nome + "' já está cadastrado!");
        return;
    }

    addPessoa(nome, idade);
    atualizaTabela();
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

function atualizaTabela () {
    tabela.innerHTML = "";
    ordenaTabela();

    for (let i=0; i<pessoas.length; i++) {
        var linha = tabela.insertRow(i);

        //Insere células da linha
        var cellNome = linha.insertCell(0);
        var cellIdade = linha.insertCell(1);
        var cellEdita = linha.insertCell(2);
        var cellDeleta = linha.insertCell(3);
        
        //Preenche células
        cellNome.innerHTML = pessoas[i].nome;
        cellIdade.innerHTML = pessoas[i].idade;
        cellEdita.innerHTML = cellEdita.innerHTML + "<button type='button'>Editar</button>"
        cellDeleta.innerHTML = cellDeleta.innerHTML + "<button type='button'>Deletar</button>"
    }

}

function ordenaTabela() {

    //Ordena o array de forma descendente
    pessoas.sort((a,b) => b.idade - a.idade);
    //Reverte a ordenação atual
    //pessoas.reverse((a,b) => a.idade - b.idade);
}
