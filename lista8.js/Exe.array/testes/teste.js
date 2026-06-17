 console.log("----------")
function soma(number1, number2=0) {
    return number1 + number2  
}

function mostrar (n1,n2){
    console.log('A resposta é:', soma(n1,n2))
}

mostrar(3,1)
mostrar(4,1)
mostrar(5,7)

console.log("----------")
function tabuada (tabuada) {

    for (let i = 2; i<=10; i++) { 
        console.log(`${i} x ${tabuada} = ${i*tabuada}`)
    }
     console.log("----------")
    
}

tabuada (2)
tabuada (3)
tabuada (4)
tabuada (5)
