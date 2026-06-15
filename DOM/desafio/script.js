let contador = 0;

function cadastrar() {

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if (nome == "" || idade == "") {
        alert("Preencha todos os campos!");
        return;
    }

    let linha = document.createElement("tr");

    let colunaNome = document.createElement("td");
    colunaNome.textContent = nome;

    let colunaIdade = document.createElement("td");
    colunaIdade.textContent = idade;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaIdade);

    document.getElementById("tabela").appendChild(linha);

    contador++;

    document.getElementById("total").textContent =
        "Total de cadastrados: " + contador;

    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
}