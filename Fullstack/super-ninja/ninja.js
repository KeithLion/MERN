class Ninja {
    constructor(health, speed,strength,name){

        this.name = name,
        this.health = health
        this.speed = 3,
        this.strength = 3
    }
    showName(name){
        this.name = console.log(name)
    }

    showStats(name,strength,speed,health){
        this.name = name,
        this.strength =strength,
        this.speed = speed,
        this.health = health
    }

    drinkSake(){
        this.health + 10
    }
}

class Sensei {
    constructor(health,speed,strength){
        this.wisdom = 10
    }
    speakWisdom(){
        return "What one programmer can do in one month, two programmers can do in two months"
    }

}


const ninja1 = new Ninja('Tan',20)