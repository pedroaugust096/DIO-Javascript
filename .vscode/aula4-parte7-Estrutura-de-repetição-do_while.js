// Do while --> É semelhante ao while; porém, a diferença entre os dois é que o do while recebe a regra no final, em vez de recebê-la no início.

let contador = 0

do{
    console.log('Olá')
    contador++
}
while(contador < 3)

// Obs.: Se este exemplo fosse feito utilizando o while e o contador se iniciasse em 3, o laço não seria executado, pelo fato do contador iniciar com o valor de parada do looping. No caso acima, com a estrutura do while, o laço ocorreria uma vez pois, primeiro este laço executa a ação para - somente no fim - verificar se a condição de parada foi atingida. Tudo o que estiver dentro do escopo do laço do while será executado pelo menos uma vez no comando.

// Exemplo:

const prompt = require('prompt-sync')({sigint: true});
let numero

do {
  numero = prompt('Digite um número entre 1 e 10: ');
} while(numero < 1 || numero > 10);

console.log(`Você digitou o número ${numero}.`);