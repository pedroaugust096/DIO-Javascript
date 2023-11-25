// Fazer uma função que exiba somente a primeira parte do nome de uma pessoa
let userName = getFirstName('Pedro Augusto Rego da Silva', ' ')
console.log('Seja bem-vindo, ' + userName)

userName = getFirstName('Carlos-Almeida-Juanito', '-')
console.log('Seja bem-vindo, ' + userName)

function getFirstName(name, splitChar = ' '){
    let firstName = name.split(splitChar)[0] // --> Separa o texto em cada lugar que ele encontrar um espaço
    return firstName
}