let pessoas = [
    { nome: "Gustavo", idade: 15 },
    { nome: "Evelyn", idade: 22 },
    { nome: "Giovanna", idade: 18 },
    { nome: "Dany", idade: 25 },
    { nome: "Cris", idade: 30 }
];

function filtrarMaiores18(lista) {
    return lista.filter(pessoa => pessoa.idade > 18);
}

console.log(filtrarMaiores18(pessoas));
