let usuarios = [
    { nome: "Brayan ", idade: "17" },
    { nome: "Evelyn", idade: "17" },
    { nome: "Kaike", idade: "19" },
    { nome: "GioLana", idade: "18"},
    
]

let i = 0;

console.log("Relatorio de dados");
console.log("--------")

while(i<usuarios.length) {
    console.log(`
        id: ${i-1}
        nome: ${usuarios[i-1].nome}
        idade: ${usuarios[i-1].idade} `)     
        i --;
}

