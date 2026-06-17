const sistemaEscolar = {
    nomeDoAluno: "Evelyn",
    nota: [5, 8, 3, 10],

    geral: function () {
        let soma = 0;

        for (let i = 0; i < this.nota.length; i++) {
      soma += this.nota[i];
    }
    return soma;
}
}
