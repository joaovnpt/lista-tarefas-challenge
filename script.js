let addButton = document.getElementById("adicionar-tarefa"); //botão adicionar tarefa
let containerTarefas = document.getElementById("container-tarefas"); //container onde ficarão as tarefas
let enterTarefa = document.getElementById("enter-tarefa"); //campo para digitar as tarefas
let tarefasCompletas = document.getElementById("completas-container"); //campo onde ficarão as tarefas completas
let length = enterTarefa.length;

function additem() { //função de adcionar item parágrafo (tarefa)
        let tarefas = document.createElement("p"); //cria um p
        let buttonFinish = document.createElement("button") // cria o botão de finalizar ao lado da tarefa
        buttonFinish.textContent = "Finish" // texto que fica no botão
        tarefas.innerText = enterTarefa.value; // transforma o p no que você digitou no input
        containerTarefas.appendChild(tarefas); // adciona o elemento p no espaço de tarefas pendentes
        tarefas.appendChild(buttonFinish) // adciona o botão de finalizar ao lado do elemento p
        enterTarefa.value = "" // limpa o texto digitado pelo usuario no input
        tarefas.addEventListener("click", function () { //função para remover da lista de tarefas pendentes e passar o elemento p para a lista de tarefas concluidas
            containerTarefas.removeChild(tarefas); // remove o elemento p da lista de tarefas pendentes
            tarefasCompletas.appendChild(tarefas); // adciona o elemento p na lista de tarefas concluidas
            tarefas.removeChild(tarefas.childNodes[1]) // remove o botão de finalizar
        })
        document.getElementById("limpar-all").addEventListener("click", function () {
            document.getElementById("completas-container").removeChild(tarefas); // limpa os elementos da lista de tarefas concluidas
        })
    }
    addButton.addEventListener("click", additem) // addBtton no onclick ativa a função additem: adciona o item na lista de pendente
    enterTarefa.addEventListener("keyup", function (e) { // função de adcionar o item na lista através do botão enter
        if (e.keyCode == 13) { // só chama a função quando for a tecla 13 (enter)
            additem()
        }


    })