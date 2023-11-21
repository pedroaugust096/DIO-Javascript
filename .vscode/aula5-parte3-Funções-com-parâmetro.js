// Função torrada() que recebe um tipo de pão diferente de acordo com a necessidade:
torrar('pão de forma', 10.90, 'Pedro') 

// var nome --> o var declara uma variável em escopo global. Ou seja, ela vai funcionar dentro da função e do lado de fora. NÃO É RECOMENDADO!

function torrar(pao, valor, nome = 'cliente') // --> recomendado sempre deixar a variável não obrigatória como a última a ser declarada
{
    console.log('torrada feita com ' + pao)
    console.log('o valor total é ' + valor)
    console.log('ela é um pedido de ' + nome)
}