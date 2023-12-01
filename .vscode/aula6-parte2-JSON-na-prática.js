// Realizando o mesmo exemplo da aula anterior, mas agora, com o uso do JSON para gerar os dados.

// Obs.: Para declarar o JSON, precisa-se declarar um objeto (declarar entre chaves). Tudo que estiver dentro das chaves será o escopo do JSON. Na prática, funciona como uma declaração de dicionário.
let invoice = {
    name: 'Pedro',
    age: 27,
    products: {
        0: ['Mouse 2xwm', '29.90'],
        1: ['Teclado mecânico', '129.99'],
        2: ['Monitor', '899.99'],
        3: ['TV 100 pol', '1000.90']
    },
    taxes: "98.90"
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`O comprador é: ${invoice.name}`)
    console.log(`A idade é: ${invoice.age}` )
    console.log('------------------------------')

// Obs.: For in --> é um for próprio para percorrer objetos ou listas. O valor do index será incrementado automaticamente, sem necessidade de indicar o valor inicial do contador. A parcela da linha 25 é utilizada para criar duas variáveis ao mesmo tempo.

    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index] // --> Processo de desestruturação: percorrer os valores de uma lista e desestruturar, ou seja, guardar cada um desses valores numa variável

        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}