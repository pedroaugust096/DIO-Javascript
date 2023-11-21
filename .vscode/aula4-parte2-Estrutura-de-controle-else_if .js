// Else if --> ocorre quando é possível realizar uma segunda pergunta.
// Exemplo: Se a fome for baixa, realiza uma primeira opção. Se for média, realiza uma segunda opção. Se a fome for alta, realiza uma terceira.

let nivelDeFome = 10

if(nivelDeFome === 1){
    console.log('Pouca fome')
}
else if(nivelDeFome === 2) // Segundo if, ou if encadeado
{
    console.log('Muita fome')
}
else{
    console.log('Você comeria mais que o pica-pau')
}

// Obs.: O if é a primeira pergunta. O else if, a segunda pergunta. O else seria a possibilidade que está fora tanto da primeira quanto da segunda pergunta.