function adicionar() {

    let tarefa = document.getElementById("tarefa").value;

    let item = document.createElement("li");

    item.textContent = tarefa;

    document.getElementById("lista").appendChild(item);

    document.getElementById("tarefa").value = "";
}