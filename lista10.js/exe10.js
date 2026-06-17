const jogadores = [
    { nome: "Evelyn", pontos: 120 },
    { nome: "Giovanna", pontos: 80 },
    { nome: "Gustavo", pontos: 150 },
    { nome: "Lucas", pontos: 100 }
];

function ranking(lista) {
for (let i = 0; i < lista.length; i++) {
for (let j = i + 1; j < lista.length; j++) {

  if (lista[j].pontos > lista[i].pontos) {

   let aux = lista[i];
   lista[i] = lista[j];
   lista[j] = aux; }
}
}

    return lista;
}

console.log(ranking(jogadores));