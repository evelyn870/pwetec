const jogadores = [
  { nome: "Carlos", pontos: 150 },
  { nome: "Ana", pontos: 320 },
  { nome: "Bruno", pontos: 210 },
  { nome: "Marina", pontos: 500 }
];

function rankingPontuacao(lista) {
  return lista.sort((a, b) => b.pontos - a.pontos);
}

const ranking = rankingPontuacao(jogadores);

console.log(ranking);