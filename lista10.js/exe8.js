let pessoas = [
    { nome: "Ana", idade: 15 },
    { nome: "Bruno", idade: 22 },
    { nome: "Carlos", idade: 18 },
    { nome: "Diana", idade: 25 },
    { nome: "Eduardo", idade: 30 }
];

function filtrarMaiores18(lista) {
    return lista.filter(pessoa => pessoa.idade > 18);
}

console.log(filtrarMaiores18(pessoas));