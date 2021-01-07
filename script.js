var pessoas = [];
var tabela = document.getElementById("tabela");

function cadPessoa (nome, idade) {
    
    if(ehNomeRepetido(nome)) {
        window.alert("O nome '" + nome + "' já está cadastrado!");
        return;
    }

    addPessoa(nome, idade);
    ordenaTabela();
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

    for (let i=0; i<pessoas.length; i++) {
        let linha = tabela.insertRow(i);

        //Insere células da linha
        let cellNome = linha.insertCell(0);
        let cellIdade = linha.insertCell(1);
        let cellDeleta = linha.insertCell(2);
        let cellEdita = linha.insertCell(3);
        
        //Preenche células
        cellNome.innerHTML = pessoas[i].nome;
        cellIdade.innerHTML = pessoas[i].idade;
        cellDeleta.innerHTML = cellDeleta.innerHTML + `<button type='button' onclick='delPessoa(${i})'>Deletar</button>`;
        cellEdita.innerHTML = cellEdita.innerHTML + `<button type='button' onclick='editPessoa(${i})'>Editar</button>`;
    }

}

function ordenaTabela() {

    //Ordena o array de forma decrescente
    pessoas.sort((a,b) => b.idade - a.idade);
}

function reverteSort() {
    pessoas.reverse((a,b) => b.idade - a.idade);
    atualizaTabela();
}

function atualizaPessoa(index) {
    nome = document.getElementById("nome").value;
    idade = document.getElementById("idade").value;
    pessoas[index].nome = nome;
    pessoas[index].idade = idade;
    ordenaTabela();
    atualizaTabela();
}

function cancelaEdit() {
    ordenaTabela();
    atualizaTabela();
}

function editPessoa(index) {
    let cellNome, cellIdade, cellBotao;
    cellNome = tabela.rows[index].cells[0];
    cellIdade = tabela.rows[index].cells[1];
    cellBotao = tabela.rows[index].cells[3];
    cellNome.innerHTML = "<input type='text' name='novoNome' id='nome'>";
    cellIdade.innerHTML = "<input type='text' name='novaIdade' id = 'idade'>";
    cellBotao.innerHTML = `<button type='button' onclick='atualizaPessoa(${index})'>Salvar</button><button type='button' onclick='cancelaEdit()'>Cancelar</button>`;
    
}

function delPessoa(index) {
    if(!window.confirm("Deseja apagar esta linha?"))
        return;
    pessoas.splice(index,1);
    ordenaTabela();
    atualizaTabela();
}

