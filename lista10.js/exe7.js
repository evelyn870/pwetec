let carrinho = [
  { nome: "Colar", quantidade: 2, preco: 50 },
  { nome: "Bolsa", quantidade: 1, preco: 100 },
  { nome: "Tênis", quantidade: 1, preco: 900 }
];

function calcularTotal(itens) {
  let total = 0
  for (let i = 0; i < itens.length; i++) {

    total += itens[i].quantidade * itens[i].preco;
  }
  return total;
}
console.log("Total: R$ " + calcularTotal(carrinho));
