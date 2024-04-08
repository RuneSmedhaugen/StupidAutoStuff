class Character {
    constructor(name, health, attack, imageUrl) {
        this.name = name;
        this.health = health;
        this.attack = attack;
        this.imageUrl = imageUrl;
    }
}

class Team {
    constructor(name){
        this.name = name;
        this.members = [];
    }

    addMember(character){
        this.members.push(character);
    }
}

class Player {
    constructor() {
        this.coins = 10;
        this.team = new Team("Player Team");
    }

    buyCharacter(character) {
        if (this.coins >= 3) {
            this.coins -= 3; 
            this.team.addMember(character);
            return true; 
        } else {
            return false; 
        }
    }
}

const characterData = [
{
    name: "crawliphant",
    health: 5,
    attack: 1,
    imageUrl: "img/crawliphant.png",
},
{
    name: "narwall",
    health: 3,
    attack: 4,
    imageUrl: "img/narwall.png",
},
{
    name: "susage",
    health: 2,
    attack: 5,
    imageUrl: "img/Susage.png",
},
{
    name: "cheesy",
    health: 3,
    attack: 2,
    imageUrl: "img/Cheesy.png",
},
{
    name: "cooki",
    health: 1,
    attack: 5,
    imageUrl: "img/cooki.png",
},
{
    name: "hamburglar",
    health: 4,
    attack: 3,
    imageUrl:"img/hammy2.png",
},
//tier 2
{
    name: "kirky",
    health: 8,
    attack: 4,
    imageUrl: "img/Kirky.png",
},
{
    name: "kolera",
    health: 3,
    attack: 10,
    imageUrl: "img/Kolera.png"
}

]

const characters = characterData.map(({name, health, attack, imageUrl}) => new Character(name, health, attack, imageUrl));

const player = new Player();

let battleInProgress = false;
