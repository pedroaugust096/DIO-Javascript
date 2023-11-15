// AND ( && )
let idade = 18
let vistoVerificado = true
let resultado = (idade >= 18) && (vistoVerificado === true)
console.log('Permissão para viajar: ' + resultado)

idade = 17
resultado = (idade >= 18) && (vistoVerificado === true)
console.log('Permissão para viajar: ' + resultado)

// Imagine um jogo em que, para vencer, a pessoa precisa apanhar 100 moedas e 1 item estela:
let moedasColetadas = 100
let item = 'estrela'
resultado = (moedasColetadas >= 100) && (item === 'estrela')
console.log('Venceu o jogo? ' + resultado)

moedasColetadas = 99
item = 'chapéu de aniversário'
resultado = (moedasColetadas >= 100) && (item === 'estrela')
console.log('Venceu o jogo? ' + resultado)

// OR ( || ) - o boneco só pode sair se não estiver chovendo OU se ele estiver com guarda-chuva:
let tempo = 'ensolarado'
item = 'guarda-chuva'
let podeSair = (tempo !== 'chuva') || (item === 'guarda-chuva')
console.log('O personagem pode sair? ' + podeSair)

tempo = 'chuva'
podeSair = (tempo !== 'chuva') || (item === 'guarda-chuva')
console.log('O personagem pode sair? ' + podeSair)

tempo = 'chuva'
item = 'pá'
podeSair = (tempo !== 'chuva') || (item === 'guarda-chuva')
console.log('O personagem pode sair? ' + podeSair)

// NOT (!) - nega uma afirmação. Deseja-se verificar se está chovendo:
tempo = 'chuva'
resultado = tempo === 'chuva'
console.log('Não está chovendo? ' + !resultado) // --> com a inserção de uma exclamação antes da variável resultado, invertemos o valor retornado por ela. Se adicionarmos 2 exclamações, a variável volta a retornar true.

// Exemplo: Verificar se o tempo não está chuvoso e verificar se o horário é maior que 6h:
tempo = 'chuva'
let horario = 8
resultado = (tempo !== 'chuva') && (horario > 6)
console.log('Está chovendo e já passou das 6h? ' + resultado)
console.log('Está chovendo e já passou das 6h? ' + !resultado)
