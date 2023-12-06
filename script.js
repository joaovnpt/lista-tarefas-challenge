function adicionar() {
    let novoItem = document.createElement("li");
    let textoItem = document.getElementById("tarefa").value;
    let textoNode = document.createTextNode(textoItem);
    novoItem.appendChild(textoNode);

    let lista = document.getElementById("lista");
    lista.appendChild(novoItem);
}

function excluirTarefa() {
    let lista = document.getElementById("lista");
    let itemParaRemover = lista.lastChild;

    // Este if serve para verificar se há um item a ser removido
    if (itemParaRemover) {
        lista.removeChild(itemParaRemover);
    }
}