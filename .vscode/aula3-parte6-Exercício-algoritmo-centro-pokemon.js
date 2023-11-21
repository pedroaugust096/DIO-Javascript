// Crie um código para armazenar o máximo de informações possível dos pokemon da imagem ao lado e ao final, para cada um, exiba uma mensagem de saída escrita o nome do pokemon concatenado com "Cadastrado com sucesso"
const mensagem1 = 'BEM VINDO AO CENTRO POKÉMON'
const mensagem2 = ' cadastrado com sucesso'
let centroPokemon = [
    ['POOCHYENA', 2, 'M', 'HP = 13 / 13'],
    ['ZIGZAGOON', 2, 'F', 'HP = 13 / 13'],
    ['DRAGONITE', 5, 'M', 'HP = 25 / 25'],
    ['DRAGONITE', 5, 'F', 'HP = 24 / 24'],
    ['DRAGONITE', 5, 'F', 'HP = 24 / 24'],
    ['POOCHYENA', 3, 'F', 'HP = 15 / 15'],
    ['WURMPLE', 2, 'M', 'HP = 7 / 14']
]

console.log(mensagem1)
console.log('\n' + centroPokemon[0][0] + mensagem2)
console.log(centroPokemon[1][0] + mensagem2)
console.log(centroPokemon[2][0] + mensagem2)
console.log(centroPokemon[3][0] + mensagem2)
console.log(centroPokemon[4][0] + mensagem2)
console.log(centroPokemon[5][0] + mensagem2)
console.log(centroPokemon[6][0] + mensagem2)
