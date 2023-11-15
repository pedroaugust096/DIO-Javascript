let idade = 30
console.log('valor da minha variável: ' + idade)
idade = 30 + 6
console.log('\n' + 'operação de adição: ' + idade)

// Imaginando uma situação em que todos os produtos de uma determinada loja possuem um código numérico que seguem o padrão de sempre começar por 1000 e ter uma outra numeração, um código adicionado a este número. Todos os códigos são padronizados por 1000, o que muda são os 2 ou 3 últimos dígitos. Para pegarmos somente a parte referente ao código de algum produto, desconsiderando a parcela fixa padrão:

let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000
console.log('\n' + 'código exato do produto: ' + codigoExato)

// Imaginando agora a situação em que o usuário compra um produto online e foi taxado, e o valor final, com a taxa, seria o dobro do valor do produto:

let precoProduto = 100.99
let valorComTaxa = precoProduto * 2
console.log('\n' + 'Valor do produto com taxa: ' + valorComTaxa)

// Exemplo da tabuada:

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando
console.log('\n' + 'O resultado da multiplicação é: ' + produto)

multiplicador = 8
produto = multiplicador * multiplicando // --> Esta linha deve ser repetida. Senão, o resultado será o mesmo
console.log('\n' + 'O resultado da multiplicação é: ' + produto)

// Exemplo de divisão:

let notaDoMercado = 50
let pessoasParaDividir = 2
console.log('\n' + 'Operação de divisão: ' + notaDoMercado / pessoasParaDividir)

// Exemplo módulo da divisão:

let calculo = 10 % 3
console.log('\n' + 'O módulo da divisão (resto) é: ' + calculo)