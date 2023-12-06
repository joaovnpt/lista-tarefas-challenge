function adicionar() { //Função para adicionar uma nova tarefa
    let novoItem = document.createElement("li"); //novoItem = criar elemento de lista
    let textoItem = document.getElementById("tarefa").value; //textoItem = valor do elemento com id "tarefa"
    let length = textoItem.length;
    if (length < 1) alert("Digite a tarefa para adiciona-la");
    else {
        let textoNode = document.createTextNode(textoItem); //textoNode = transforma o textoItem de VALOR para TEXTO
        novoItem.appendChild(textoNode); //textoNode agora é um filho de novoItem
        let lista = document.getElementById("lista"); //lista = elemento com id "lista"
        lista.appendChild(novoItem); //novoItem é agora um filho de lista
        criarBotaoConcluir(novoItem) //Função para criar o botão de concluir tarefa para cada novoItem criado
    }
}

function transferirTarefa() {
    let divFinalizadas = document.querySelector(".finalizadas") //divFinalizadas = div .finalizadas
    let lista = document.getElementById("lista");
    let itemParaRemover = lista.lastChild; //itemParaRemover = ultimo filho da lista
    if (itemParaRemover) {
        divFinalizadas.appendChild(lista) //Se houver um itemParaRemover, a tarefa é transferida para a div .finalizadas
        let botao = document.getElementById("botao-concluir");
        excluirBotaoConcluir(botao) //Exclui o botão junto
        let novoItem = lista.lastChild; //novoItem = último filho da lista
        transferirTarefa(novoItem); //Função já criada com parâmetro do item que quero excluir
    }
}

function criarBotaoConcluir() {
    let novoItem = lista.lastChild; //Novamente
    let divPendentes = document.querySelector(".pendentes"); //divPendentes = div class="pendentes"
    let ul = document.getElementById("lista"); //ul = #lista
    let lastChild = ul.lastChild; //lastChild = último filho da lista
    if (novoItem) { //Se existir um novoItem
        let botao = document.createElement("input"); //Criou um elemento input
        botao.type = "button"; //Type button
        botao.id = "botao-concluir" //id "botao-concluir"
        botao.value = 'Concluir "' + lastChild.innerHTML + '"'; //value = 'concluir' + nome da ultima tarefa
        botao.onclick = function () { // onclick ele executa essas duas funções
            excluirBotaoConcluir();
            transferirTarefa()
        }
        divPendentes.appendChild(botao); //botao agora é um filho da div.pendentes
    }
}

function excluirBotaoConcluir() {
    let botao = document.getElementById("botao-concluir");
    lista.appendChild(botao);
    lista.removeChild(botao); //removeu
}

function limparConcluidas() {

}