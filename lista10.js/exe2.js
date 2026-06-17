const lista = [
  {
    nome: 'Vestido',
    preco: 84.00
  },
  {
    nome: 'Moletom',
    preco: 179.90
  },
  {
    nome: 'Meias',
    preco: 35.90
  },
  {
    nome: 'Chapeu',
    preco: 60.00
  }
];

function se(lista) {
  let resultado = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].preco > 50) {
      resultado.push(lista[i]);
    }
  }

  return resultado;
}

console.log(se(lista));