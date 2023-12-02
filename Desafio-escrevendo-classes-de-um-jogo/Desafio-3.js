class heroStatus{
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    toAttack(){
        let attack
        switch(this.type){
            case('Mago'):
                attack = 'magia'
                console.log(`O ${this.type} atacou usando ${attack}`)
                break
            case('Guerreiro'):
                attack = 'espada'
                console.log(`O ${this.type} atacou usando ${attack}`)
                break
            case('Monge'):
                attack = 'artes marciais'
                console.log(`O ${this.type} atacou usando ${attack}`)
                break
            case('Ninja'):
                attack = 'shuriken'
                console.log(`O ${this.type} atacou usando ${attack}`)
                break
        }
    }
}

let heroi1 = new heroStatus('Skillmaster', '17', 'Mago')
heroi1.toAttack()