let nomes = ["Ana", "Carlos", "Joao", "Mariana"]

function buscar(nomes) {
  for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomes) {
      return "Nome encontrado";

    }
  }
  return "Nome nao encontrado"
}

console.log(buscar("Carlos"));
console.log(buscar("Pedro"));
