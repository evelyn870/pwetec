let nomes = ["Ana", "Carlos", "Ana", "João", "Carlos", "Ana"];

function contarOcorrencias(nomes) {
  let contador = {};

  for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i];
    if (contador[nome]) {
      contador[nome]++;
    } else {
      contador[nome] = 1;
    }
  }
  return contador;
}

console.log(contarOcorrencias(nomes));