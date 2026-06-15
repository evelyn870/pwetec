function somar() {

const num1 = Number(document.getElementById("n1").value);

const num2 = Number(document.getElementById("n2").value);

const soma = num1 + num2;

    document.getElementById("resultado").textContent =
        "Resultado: " + soma;

}