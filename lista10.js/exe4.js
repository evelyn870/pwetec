let nomes = ["Evelyn", "Giovanna", "Brayan", "Kaike"]

function buscar(nomes) {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomes) {
      return "Nome encontrado";

    }
  }
  return "Nome nao encontrado"
}

console.log(buscar("Evelyn"));
console.log(buscar("Giovanna"));
