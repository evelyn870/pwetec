const contador = document.querySelector ("#contador")

function somar (){
    let numero = Number(contador.innerText)
    numero++ 
    contador.innerText = numero
}