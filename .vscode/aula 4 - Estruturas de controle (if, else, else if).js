// if
let ehLigado = false

if(ehLigado){
    console.log('Executou comando') // --> Só retornará valores se a variável booleana ou expressão que estiver dentro dos parênteses do if forem verdadeiras. Como a variável recebe false, neste exemplo, nada acontece.
}

// Exemplo funcionando:

if(!ehLigado){
    console.log('Segundo if: Executou comando')
}

// Exemplo: Imaginando uma situação em que precisamos fazer um bolo e devemos comprar ovo e leite. Porém, só traremos o leite se existir ovo para venda no mercado.

let possuiOvos = true
let itensComprados = ''

if(possuiOvos){
    itensComprados = 'Leite'
}

console.log('item comprado: ' + itensComprados) // --> Está fora do escopo do if