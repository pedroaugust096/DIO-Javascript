// Não devemos criar nomes de funções começando por números, ou com espaço entre eles. Basicamente, as mesmas regras para a declaração de variáveis e constantes devem ser usadas para a formulação dos nomes das funções. Cadastrar nomes de função que remetam à ações, já que as funções são criadas primordialmente para executar ações e tarefas. Também é importante não criar funções que executem várias ações diferentes. Exemplo:

main() // --> Função main é a que tem a responsabilidade de chamar várias outras.

function main(){
    getData()
    checkValues()
    sendToDatabase()
}

function getData(){
    console.log('pegando dados do usuário')
}

function checkValues(){
    console.log('validando dados')
}

function sendToDatabase(){
    console.log('cadastrando dados')
}