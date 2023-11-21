let numero = '1'
console.log(numero == '1')
console.log(numero == 1)
console.log(numero === 1)
console.log()

// = é atribuição
// == é para comparar o valor
// === compara o valor e o formato do conteúdo. OBS.: '1' é um texto e 1 é um número
// !== verifica se é diferente. Se for, retorna true. Caso contrário, retorna false

let marca = 'LG'
console.log(marca !== 'LG')
console.log(marca !== 'Samsung')
console.log()

// O resultado de uma comparação pode ser armazenado em uma variável. Este método é o mais utilizado no dia-a-dia em programação. Exemplo:

let resultado = marca !== 'Samsung' // --> Retornará um resultado booleano (true ou false)
console.log(resultado)
console.log()

//Exemplo prático: Imagine que seja necessário fazer um sistema de embarque de voos, e existe uma pessoa com o cpf cassado, a impossibilitando de realizar embarques. Como criar um sistema que verifique se o cpf da pessoa está habilitado ou não:

let cpfBloqueado = '123.445.222-45'
let cpfUsuario = '222.111.222-09'
let ehCPFBloqueado = cpfUsuario === cpfBloqueado // --> variável de validação

console.log('O usuário está impossibilitado de embarcar? ' + ehCPFBloqueado)
console.log()

// Exemplo: Agora imagine que exista sistema específico, e que apenas um usuário possa utilizá-lo. Como fazer esta verificação?

let CPFPermitido = '222.555.333-01'
let CPFDoUsuario = '222.555.333-02'

let ehBloqueado = CPFDoUsuario !== CPFPermitido
console.log('É um usuário inválido? ' + ehBloqueado)
