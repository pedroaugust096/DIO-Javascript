// A estrutura de decisão switch case é utilizada em casos que demandariam um grande número de ifs e elses. Utilizada quando existem muitas opções dentro de uma pergunta.

// Palavras-chave: switch/case/break/default

// Imaginando a situação em que, baseado na fruta que a pessoa trouxer, alguém fará um suco para tomar junto com ela. O interior dos parêntesis diz respeito à variável que será levada em consideração, e o interior das chaves, ao escopo do switch. A parcela case --> significa: caso esta variável seja..., seguida da situação de verificação.

let fruta = 'pêra'

switch (fruta){
    case 'laranja': // --> caso seja laranja
        console.log('suco de laranja') // --> execute esta ação
        break // --> impede que os cases de baixo sejam executados simultaneamente caso este case seja atendido.
    
    case 'banana': // --> caso seja banana
        console.log('vitamina de banana') // --> execute esta ação
        break
    
    case 'maçã':
        console.log('suco de maçã')
        break
    
    default: // --> É uma resposta padrão (um case padrão) para o caso da variável conter um valor que não está contemplado nos outros cases.
        console.log('suco genérico')
}

// Obs.: Caso um dos cases seja atendido, a estrutura de decisão retornará este case específico e todos os outros que estão abaixo. Para que isso não ocorra, utiliza-se a palavra-chave break. Já o default retorna o valor especificado em seu escopo caso todos os outros cases falhem. É como se fosse um else numa estrutura if.