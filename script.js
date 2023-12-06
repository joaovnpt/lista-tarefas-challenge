let addButton = document.getElementById("adicionar-tarefa");
let containertask = document.getElementById("containertask");
let inputcamp = document.getElementById("camporesult");
let completetask = document.getElementById("containercompletetask");

function additem(){ //função de adcionar item parágrafo
    let task = document.createElement("p"); //é criad o elemento que vai para uma let
    let buttonFinish = document.createElement("button") // cria o botão de finalizar ao lado da tarefa
    buttonFinish.textContent = "Finish" // texto que fica no botão
    inputcamp.focus(); // ira fazer que o foco fique sempre no input
    task.innerText = inputcamp.value; // adciona o texto do input dentro do elemento p que vai para a lista
    containertask.appendChild(task); // adciona o elemento p no espaço de tarefas pendentes
    task.appendChild(buttonFinish) // adciona o botão de finalizar ao lado do elemento p
    inputcamp.value = "" // limpa o texto digitado pelo usuario no input
    task.addEventListener("click", function(){ //função para remover da lista de tarefas pendentes e passar o elemento p para a lista de tarefas concluidas
        containertask.removeChild(task); // remove o elemento p da lista de tarefas pendentes
        completetask.appendChild(task); // adciona o elemento p na lista de tarefas concluidas
        task.removeChild(task.childNodes[1]) // remove o botão de finalizar
        inputcamp.focus();
    })
    document.getElementById("limpar2").addEventListener("click", function(){
       document.getElementById("containercompletetask").removeChild(task); // limpa os elementos da lista de tarefas concluidas
       inputcamp.focus();
    })
}
addButton.addEventListener("click", additem) // adciona o item na lista de pendente
inputcamp.addEventListener("keyup", function(e){ // função de adcionar o item na lista através do botão enter
    if(e.keyCode == 13){ // só chama a função quando for a tecla 13 (enter)
        additem()
    }

    
})