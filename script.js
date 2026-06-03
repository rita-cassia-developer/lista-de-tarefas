function adicionarTarefa() {


    let inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim();
    let listaTarefas = document.getElementById("listaTarefas");
    let mensagem = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagem.textContent = "Erro: O campo não pode ficar vazio!";
        mensagem.style.color = "#ee2222";
    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "#046027"


        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
    }

    inputTarefa.value = "";
}




