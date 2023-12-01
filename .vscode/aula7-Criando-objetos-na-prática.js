// Classes são quaisquer estruturas utilizadas para criar objetos, tais como uma forma de bolo é utilizada para preparar bolos de diferentes tipos, mas que possuirão um formato em comum. Já os objetos são quaisquer elementos que existam dentro de um programa. Para a programação, o conceito de objeto se aplica a tudo: pode se aplicar a representação de um celular na programação, de um microfone, de um animal, de uma pessoa, etc. Fazendo uma analogia, a classe seria a forma do bolo e o objeto seria o bolo em si, o qual foi formado a partir da forma (classe).

// A palavra class declara uma "forma de estrutura de dados"
// Método constructor() --> toda classe, por boa prática, deve conter um método chamado constructor(). Ele é responsável por guardar os dados das classes, no interior das mesmas, em variáveis. Ele atribui os valores para dentro da classe. A classe, além de guardar informações, pode guardar funções e pode ter comportamento.
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa // --> seria o mesmo que declarar uma variável (como se fosse let saborRecheio, por exemplo).
        this.saborRecheio = saborRecheio
    }
}

// As linhas de código acima foram responsáveis pela criação da classe (a forma do bolo). Agora, será necessário criar o objeto em si (o bolo). O objeto é criado ao usarmos, de fato, a classe - ou seja - ao instanciar a classe. A declaração da variável boloFesta atribuída à sentença new formaDeBolo() instancia a variável bolo de festa à classe criada acima. A parcela new serve para indicar que a variável será atrelada a uma nova instância.

let boloFesta = new formaDeBolo('Massa de chocolate', 'Recheio de nutella')
console.log(boloFesta)