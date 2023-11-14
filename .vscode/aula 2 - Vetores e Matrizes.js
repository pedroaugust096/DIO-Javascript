// Para extinguir a necessidade de precisar cadastrar uma variável para cada pokemon dos 150 existentes, utiliza-se o conceito de vetores. Fazendo uma analogia, é como se as variáveis fossem potes para guardar objetos, e os vetores fossem os armários que podem armazenas vários potes. O vetor trata-se de uma coleção. Ex.:

let pokemon = ['Pikachu', 'Charmander', 'Bulbasaur']

console.log(pokemon)
console.log(pokemon[0])
console.log(pokemon[1])
console.log(pokemon[2])

pokemon.pop()  // --> remove o último valor de um array
console.log(pokemon)

pokemon.shift() // --> remove o primeiro valor de um array
console.log(pokemon)

let mesclado = ['Charizard', 1, 'Chikorita']
console.log(mesclado)

// Array é o mesmo que vetor.
