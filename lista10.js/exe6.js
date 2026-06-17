let livros = [
  { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K Rowling", ano: 1997 },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899 },
  { titulo: "Hamnet", autor: "Maggie O'Farrell", ano: 2020 }
];

function livrosRecentes(livros) {
  let recentes = [];

  for (let i = 0; i < livros.length; i++) {
    if (array[i].ano > 2010) {
      recentes.push(livros[i]);
    }
  }
  return recentes;
}

console.log(livrosRecentes(livros));
