alert('Boas vindas ao nosso jogo')
let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let chute 
let tentativas = 1
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa' //operador ternario

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`)
    if (numeroSecreto == chute) {
        alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`)
    }else {
        if (chute > numeroSecreto) {
            alert(`O número ${chute} é maior que o número secreto`)
        }else {
            alert(`O número ${chute} é menor que o número secreto`)
        }
        tentativas++
    }
}
