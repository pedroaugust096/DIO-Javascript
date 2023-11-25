let nVicts = 116
let nDefs = 110
let result = balanceCounter(nVicts, nDefs)

rankedLvl()


function balanceCounter(victs=0, defs=0){
    return victs - defs
}

function rankedLvl(){
    let level

    if(nVicts <= 10){
        level = 'Ferro'
    }
    else if(nVicts >= 11 && nVicts <= 20){
        level = 'Bronze'
    }
    else if(nVicts >= 21 && nVicts <= 50){
        level = 'Prata'
    }
    else if(nVicts >= 51 && nVicts <= 80){
        level = 'Ouro'
    }
    else if(nVicts >= 81 && nVicts <= 90){
        level = 'Diamante'
    }
    else if(nVicts >= 91 && nVicts <= 100){
        level = 'Lendário'
    }
    else if (nVicts >= 101){
        level = 'Imortal'
    }
    return console.log('O Herói tem saldo de ' + result + ' vitórias e está no nível ranqueado de ' + level)
}