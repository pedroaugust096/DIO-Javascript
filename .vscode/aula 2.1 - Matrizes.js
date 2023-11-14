// Matrizes --> são vetores bidimensionais. São utilizadas quando cria-se a necessidade de armazenar tipos diferentes de variáveis. O armazenamento de variáveis de tipos diferentes pode ser feito através de vetores; porém, não é muito recomendado fazer isto utilizando vetores, e sim, usando matrizes.

// Ex.: Utilizando matrizes para representar pokemons por inteiro, com todas as suas informações.

let timePokemon = [
    ['Pikachu', 'M', 1],
    ['Charmander', 'F', 3]
]

console.log(timePokemon)
console.log()
console.log(timePokemon[0])
console.log()
console.log(timePokemon[0][0])
console.log()
console.log('O pokemon ' + timePokemon[1][0] + ' é do sexo ' + timePokemon[1][1] + ' e está no nível ' + timePokemon[1][2])
