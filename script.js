function adicionar() {
    let novoItem = document.createElement("li");
    let textoItem = document.getElementById("tarefa").value;
    let textoNode = document.createTextNode(textoItem);
    novoItem.appendChild(textoNode);

    let lista = document.getElementById("lista");
    lista.appendChild(novoItem);
}