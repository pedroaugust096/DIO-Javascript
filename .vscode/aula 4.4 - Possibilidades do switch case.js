// Podem existir mais de uma palavra atrelada ao mesmo case, como no exemplo abaixo:

let fruta = 'morango'

switch (fruta){
    case 'laranja': 
        console.log('suco de laranja')
        break
    
    case 'banana': // --> caso a variável fruta seja banana, o switch case retornará 'vitamina'
    case 'morango': // --> caso ela seja morango, o switch case também retornará 'vitamina'
        console.log('vitamina de ' + fruta)
        break
    
    case 'maçã':
        console.log('suco de maçã')
        break
    
    default:
        console.log('suco genérico')
}
