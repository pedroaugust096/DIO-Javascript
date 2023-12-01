// JSON - JavaScript Object Notation (Notação de objetos em javascript). JSON é um objeto simples composto por chave e valor, com o objetivo de transferir dados. É uma notação universal, ou seja, qualquer linguagem reconhece. É utilizado para armazenar variáveis, constantes ou objetos que estejam dentro de um mesmo assunto, por assim dizer (que tenham relação uma com a outra).

// Exemplo de transferência de dados sem o uso do JSON. Imaginando uma situação em que você pegou todos os dados do usuário de uma tela e precisa enviar isto para uma função que cadastra tudo num banco de dados.
let name = 'Pedro'
let age = 27
let products = ['Mouse 2xwm', 'Teclado mecânico', 'Monitor']
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age){
    console.log('O comprador é: ' + name)
    console.log('A idade é: ' + age)
    console.log('------------------------------')
    console.log('O produto é: ' + products[0])
    console.log('O valor é: ' + productsValues[0])
}