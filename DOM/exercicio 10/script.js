 function validar() {

    let usuario = document.getElementById("usuario").value;

    if (usuario == "") {

        document.getElementById("mensagem").textContent =
            "Digite um usuário!";

    } else {

        document.getElementById("mensagem").textContent =
            "Login realizado com sucesso!";

    }
}