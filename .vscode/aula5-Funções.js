// Funções são ferramentas que servem para executar uma ação pré-estabelecida na programação. Trata-se de separar uma parte do código e guardá-la dentro de uma 'caixa' que executará estas partes quando a função for chamada no algoritmo. Exemplo: Definir uma função que sirva como uma torradeira.

torrar() // --> Chamada da função

// Declarar a função:
function torrar(){
    console.log('torrando pão')
    ejetarPao() // --> A função torrar(), em seu escopo, chama uma outra função, que é a função injetarPao()
}

function ejetarPao(){
    console.log('preparando para ejetar o pão')
    console.log('finalizado')
}