let livros = [
  { titulo: "Harry Potter", autor: "J.K Rowling", ano: 2005 },
  { titulo: "Clean Code", autor: "Robert Martin", ano: 2012 },
  { titulo: "JavaScript", autor: "João", ano: 2020 }
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