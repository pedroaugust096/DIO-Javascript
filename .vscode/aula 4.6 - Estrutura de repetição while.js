// while --> É um laço de repetição que é uma alternativa ao uso do for. Um não substitui o outro, e cada um é utilizado para casos específicos em que um deles se encaixará melhor. A diferença entre o for e o while é que, neste último, a quantidade de vezes em que precisamos executar a ação não é conhecida.

let contador = 0

while(contador < 3){
    console.log('Olá')
    contador++ // --> Nunca esquecer de incrementar a variável ao utilizar o while, uma vez que ele não exige a condição de incremento ao chamarmos o laço de repetição, como é o caso do for
}