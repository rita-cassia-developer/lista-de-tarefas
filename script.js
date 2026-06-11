let tarefas = [];
function adicionarTarefa() {

    let inputTarefa = document.getElementById("inputTarefa");
    const tarefa = inputTarefa.value.trim();

    let mensagem = document.getElementById("mensagem");

    if (tarefa === "") {
        mensagem.textContent = "Erro: O campo não pode ficar vazio!";
        mensagem.style.color = "#ee2222";

    } else {
        mensagem.textContent = "Tarefa adicionada com sucesso!";
        mensagem.style.color = "#046027";
        tarefas.push(tarefa);
        inputTarefa.value = "";

        renderizarTarefas();

    }
}



function renderizarTarefas() {
    const listaTarefas = document.getElementById("listaTarefas");
    listaTarefas.innerHTML = "";

    for (let i = 0; i < tarefas.length; i++) {
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i];

            let botaoRemover = document.createElement("button");
            botaoRemover.className = "remover";
            botaoRemover.textContent = "Remover";
            botaoRemover.onclick = () => removerTarefa(i);

            let botaoEditar = document.createElement("button");
            botaoEditar.className = "editar";
            botaoEditar.textContent = "Editar";
            botaoEditar.onclick = () => editarTarefa(i);

            novaTarefa.appendChild(botaoRemover);
            novaTarefa.appendChild(botaoEditar);
            listaTarefas.appendChild(novaTarefa);

        }

    
        let botaoLimpar = document.querySelector("button.botao-lista");
        if (tarefas.length > 0) {
            botaoLimpar.style.display = "inline-block";
    } else {
            botaoLimpar.style.display = "none";
    }   

    function removerTarefa(i) {
        tarefas.splice(i, 1);
        renderizarTarefas();
        mensagem.textContent = "Tarefa removida com sucesso!";
    }

    function editarTarefa(i) {
        let tarefaEditada = prompt("Edite a tarefa: ");

        if (tarefaEditada.trim() !== "") {
            tarefas[i] = tarefaEditada;
            renderizarTarefas();
        }
    }

    function limparTarefas() {

        tarefas.length = 0;
        renderizarTarefas();
        mensagem.textContent = "Todas as tarefas foram limpas!";

    }

}
