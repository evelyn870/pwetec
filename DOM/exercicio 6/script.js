 function mostrarNome() {
        const nome = document.querySelector("#nome").value
        const resultado = document.querySelector("#resultado")

        resultado.textContent = `Olá, ${nome}!`
    }