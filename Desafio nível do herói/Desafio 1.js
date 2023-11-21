let nomeDoHeroi = 'BurningBlade123';
let qtdDeXP = 7850;
let elo = ''


if(qtdDeXP < 1000){
    elo = 'Ferro';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 1001 && qtdDeXP <= 2000){
    elo = 'Bronze';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 2001 && qtdDeXP <= 5000){
    elo = 'Prata';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 5001 && qtdDeXP <= 7000){
    elo = 'Ouro';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 7001 && qtdDeXP <= 8000){
    elo = 'Platina';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 8001 && qtdDeXP <= 9000){
    elo = 'Ascendente';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else if(qtdDeXP >= 9001 && qtdDeXP <= 10000){
    elo = 'Imortal';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}
else{
    elo = 'Radiante';
    console.log('O Herói de nome ' + nomeDoHeroi + ' está no nível de ' + elo + ' e com ' + qtdDeXP + ' pontos de XP!');
}