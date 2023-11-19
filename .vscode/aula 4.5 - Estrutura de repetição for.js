// for --> Utilizado para ações que o desenvolvedor queira que sejam repetidas várias vezes. Se aplica bem a situações que devam ocorrer até que alguma condição seja verdade. Exemplo: fazer um algoritmo que conte até 3.
for (let contador = 0; contador < 4; contador++){
    console.log(contador)
    console.log('aumentando o contador')
}

// Exemplo prático (cuidados com o uso do for). Dada uma situação em que você esteja programando um jogo e seu personagem tenha zero pontos de vida. Porém, a cada vez que ele utiliza uma poção, seus pontos de vida aumentam em 1 até, no máximo, 10 pontos.

let pontosDeVida = 0

for (i = 1; i <= 10; i++){
    pontosDeVida += 1
    console.log('Tomou uma poção mágica ' + i)
}

console.log(pontosDeVida + ' pontos totais')