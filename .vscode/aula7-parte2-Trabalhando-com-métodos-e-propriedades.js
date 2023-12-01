// Métodos são funções que trabalham com o texto de uma classe. Criando métodos no interior das classes:
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    // Obs.: Para criar funções dentro das classes, não é necessário escrever a palavra function:
    write(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    bakeCake(){
        console.log(`Bolo de ${this.saborDaMassa} assando!`)
    }
}

let boloFesta = new formaDeBolo('chocolate', 'nutella')
let boloPremium = new formaDeBolo('baunilha', 'coco')

boloFesta.write()
boloPremium.write()
boloPremium.bakeCake()