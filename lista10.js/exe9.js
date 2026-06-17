let conta = {
    agencia: "0001",
    numero: "1234-5",
    senha: "123456",
    saldo: 500,
    historico: []
};

function validarAcesso(agencia, numero, senha) {
    if (
        agencia == conta.agencia &&
        numero == conta.numero &&
        senha == conta.senha
    ) {
        return true;
    }

    return false;
}

function exibirSaldo() {
    console.log("Saldo: R$ " + conta.saldo);
}

function realizarSaque(valor) {

    if (valor > conta.saldo) {
        console.log("Saldo insuficiente!");
        return;
    }

    let restante = valor;

    let nota100 = 0;
    while (restante >= 100) {
        nota100++;
        restante = restante - 100;
    }

    let nota50 = 0;
    while (restante >= 50) {
        nota50++;
        restante = restante - 50;
    }

    let nota20 = 0;
    while (restante >= 20) {
        nota20++;
        restante = restante - 20;
    }

    let nota10 = 0;
    while (restante >= 10) {
        nota10++;
        restante = restante - 10;
    }

    conta.saldo = conta.saldo - valor;

    conta.historico.push("Saque de R$ " + valor);

    console.log("Saque realizado!");
    console.log("Notas de 100: " + nota100);
    console.log("Notas de 50: " + nota50);
    console.log("Notas de 20: " + nota20);
    console.log("Notas de 10: " + nota10);
}

// Teste
if (validarAcesso("0001", "1234-5", "123456")) {
    exibirSaldo();
    realizarSaque(280);
    exibirSaldo();
}