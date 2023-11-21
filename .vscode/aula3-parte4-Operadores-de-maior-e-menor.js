// Cadastro no sistema através de idade mínima:

let idadeMinima = 18
let idadeUsuario = 17
let idadePermitidaValida = idadeUsuario >= idadeMinima

console.log(idadePermitidaValida)
console.log()

idadeUsuario = 18
idadePermitidaValida = idadeUsuario >= idadeMinima
console.log(idadePermitidaValida)
console.log()

// Exemplo com a situação inversa:

let idadeDeCorte = 50
idadeUsuario = 45
let resultadoEhTerceiraIdade = idadeDeCorte < idadeUsuario
console.log(resultadoEhTerceiraIdade)
console.log()

idadeUsuario = 60
resultadoEhTerceiraIdade = idadeDeCorte < idadeUsuario
console.log(resultadoEhTerceiraIdade)
console.log()

idadeUsuario = 50
resultadoEhTerceiraIdade = idadeDeCorte <= idadeUsuario
console.log(resultadoEhTerceiraIdade)
console.log()

// Exemplo aplicado a texto:
let texto = 'felipe'
console.log(texto === 'Felipe') // --> Retornará false, pois a linguagem javascript é CaseSensitive, ou seja, ela diferencia maiúsculas de minúsculas.