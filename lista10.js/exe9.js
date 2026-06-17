let conta = [
    {
        conta: "1234-5",
        senha: "123456",
        nome: "Bryan",
        saldo: 347.345
    },
    {
        conta: "4321-0",
        senha: "123456",
        nome: "Giovanna",
        saldo: 5000
    },
    {
        conta: "4321-0",
        senha: "123456",
        nome: "Giovanna",
        saldo: 5000
    },

    {
        conta: "9876-4",
        senha: "123456",
        nome: "Gustavo",
        saldo: 5000
    },


];

function validarSenha(conta, senha, listaConta = []) {
    if (!conta || !senha) {
        console.log("digite um valor  valido!  conta ou senha")
        return false
    }
    for (let i = 0; i < listaConta.length; i++) {
        if (conta == listaConta[i].conta && senha == listaConta[i].senha) {
            console.log(`Bem vindo ao Banco BryAna! Sr(a) ${listaConta[i].nome}`)
            listaConta[i].logado = true
            listaConta[i].posicao = i
            return listaConta[i]
        }

    }
}

usuarioLogado = validarSenha("1234-5", "123456", conta)


console.log(usuarioLogado ? "logado" : "Usuario ou senha invalida")
function saldo(usuario) {

    if (usuario.logado) {
        console.log(usuario.nome)
        console.table({ saldo: "R$" + usuario.saldo.toFixed(2) })
    }
}

function saque(usuarioLogado, listaConta, valor = 0) {
    if (!usuarioLogado) {
        console.log("Sua conta nao está logada");

        return
    }

    if (saque > usuarioLogado.saldo) {
        console.log("Saldo insuficiente");
        return
    }

    listaConta[listaConta.posicao].saldo
}

realizarSaque(valor) {
    if (valor > this.saldo) {
        console.log("Saldo insuficiente!");
        return;
    }
}


let restante = valor;

let notas100 = 0;
while (restante >= 100) {
    notas100++;
    restante -= 100;
}

let notas50 = 0;
while (restante >= 50) {
    notas50++;
    restante -= 50;
}

let notas20 = 0;
while (restante >= 20) {
    notas20++;
    restante -= 20;
}

let notas10 = 0;
while (restante >= 10) {
    notas10++;
    restante -= 10;
}

this.saldo -= valor;{
this.historico.push("Saque de R$ " + valor);
console.log("Saque realizado: R$ " + valor);
console.log("Notas entregues:");
console.log("$100: " + notas100);
console.log("$50: " + notas50);
console.log("$20: " + notas20);
console.log("$10: " + notas10);
}







