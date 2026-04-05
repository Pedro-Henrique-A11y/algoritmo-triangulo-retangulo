/* Fazer um algoritmo para verificar se um triângulo é retângulo (Teorema de 
Pitágoras). Considerar os lados reais.*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Digite o valor do lado A: ", (ladoA => {
    rl.question("Digite o valor do labo B:", (ladoB => {
        rl.question("Digite o valor do lado C:", (ladoC => {
            if (ladoA ** 2 + ladoB ** 2 === ladoC ** 2){
                console.log("O triângulo é retângulo.");
            } else if (ladoA ** 2 + ladoC ** 2 === ladoB ** 2) {
                console.log("O triângulo é retângulo.");
            } else if (ladoB ** 2 + ladoC ** 2 === ladoA ** 2){
                console.log("O triângulo é retângulo.");
            } else {
                console.log("O triângulo não é retângulo.");
            }
        }))
    }))
}))