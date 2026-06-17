    function filtrarAprovados(listaDeProvas) {
        let ListaDeProvas = [
    {
        Prova: "Matemática",
        nota: 6
    },

    {
        Prova: "Historia",
        Nota: 8
    },

    {
        Prova: "Sociologia",
        Nota: 9
    }
]

 for (let i = 0; i < listaDeProvas.length; i++) {
    if (listaDeProvas[i].notaTirada >= 6) {
      console.log(listaDeProvas[i].disciplina);
    }
  }
}

filtrarAprovados(listaDeProvas)


