// Else, exemplo: Se tiver ovo vendendo no mercado, trazer para fazer o bolo. Se não tiver ovo, trazer uma lasanha

let possuiOvos = false
let itensComprados = ''

if(possuiOvos){
    itensComprados = 'Leite'
}
else{
    console.log('Exemplo else: passou na sessão de congelados')
    itensComprados = 'Lasanha congelada'
}

console.log('item comprado: ' + itensComprados)