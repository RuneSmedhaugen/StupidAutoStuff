//kan fort komme endringer her hvis jeg har gjort noe feil eller noe må legges til

const model = {
    app: {
        page: null,
    },
    input: {
        mainPage: {
            shop: [],
            playerTeam: [],

        },
        battlePage: {
            battleLog: [],
            playerTeam: [],
            enemyTeam: [],
        }
    },
    data: {

        player: {
            battlesWon: 0,
            health: 5,
            wins: 0,
            coins: 10,
            team: [],
        },

        enemy: {
            team: [],
        },

//jeg vet at abilities ikke er satt opp riktig :p tallene er bare for å huske hvilken de skal ha
        characters: [
            {
                name: "crawliphant",
                maxhealth: 5,
                health: 5,
                attack: 1,
                imageUrl: "img/crawliphant.png",
                ability: 0,
            },
            {
                name: "narwall",
                health: 3,
                maxhealth: 3,
                attack: 4,
                imageUrl: "img/narwall.png",
                ability: 1
            },
            {
                name: "susage",
                health: 2,
                maxhealth: 2,
                attack: 5,
                imageUrl: "img/Susage.png",
                ability: 2,
            },
            {
                name: "cheesy",
                health: 3,
                maxhealth: 3,
                attack: 2,
                imageUrl: "img/Cheesy.png",
                ability: 3,
            },
            {
                name: "cooki",
                health: 1,
                maxhealth: 1,
                attack: 5,
                imageUrl: "img/cooki.png",
                ability: 4,
            },
            {
                name: "hamburglar",
                health: 4,
                maxhealth: 4,
                attack: 3,
                imageUrl: "img/hammy2.png",
                ability: 5,
            },
            {
                name: "kirky",
                health: 5,
                maxhealth: 5,
                attack: 1,
                imageUrl: "img/Kirky.png",
                ability: 6,
            },
            {
                name: "kolera",
                health: 3,
                maxhealth: 3,
                attack: 10,
                imageUrl: "img/Kolera.png",
                ability: 7,
            },
            {
                name: "Piggy",
                health: 1,
                maxhealth: 1,
                attack: 5,
                imageUrl: "img/piggy.png",
                ability: 8,
            },
            {
                name: "pink",
                health: 5,
                maxhealth: 5,
                attack: 3,
                imageUrl: "img/pink.png",
                ability: 9,
            },
            {
                name: "Stikky",
                health: 2,
                maxhealth: 2,
                attack: 4,
                imageUrl: "img/Stikky.png",
                ability: 10,
            },
            {
                name: "vilmaa",
                health: 6,
                maxhealth: 6,
                attack: 2,
                imageUrl: "img/vilmaa.png",
                ability: 11,
            },
            {
                name: "blubber",
                health: 5,
                maxhealth: 5,
                attack: 5,
                imageUrl: "img/blubber.png",
                ability: 12,
            },
            {
                name: "milk",
                health: 5,
                maxhealth: 5,
                attack: 5,
                imageUrl: "img/milk.png",
                ability: 13,
            },
            {
                name: "OnOff",
                health: 5,
                maxhealth: 5,
                attack: 5,
                imageUrl: "img/onoff.png",
                ability: 14,
            },
            {
                name: "pointface",
                health: 5,
                maxhealth: 5,
                attack: 5,
                imageUrl: "img/pointface.png",
                ability: "deal 1 dmg to random enemy when taking damage",           
            },

        ],
//blir endringer her og, samme som abilities 
        items: [
           {
            name: "bronze toiletpaper",
            ability: "take one less damage",
            imageUrl: "img/Item 1 - bronse dorull.png",
           },
           {
            name: "silver toiletpaper",
            ability: "take 3 less damage 2 times",
            imageUrl: "img/Item 1 - silver dorull.png",
           },
           {
            name: "golden toiletpaper",
            ability: "do double damage once per battle",
            imageUrl: "img/Item 1 - gull dorull.png",
           },
           {
            name: "bronze cup",
            ability: "give +2 health permanently",
            imageUrl: "img/item 2 - bronse kopp.png",
           },
           {
            name: "silver cup",
            ability: "give +2 attack permanently",
            imageUrl: "img/item 2 - silver kopp.png",
           },
           {
            name: "golden cup",
            ability: "give +1 attack and +1 health permanently",
            imageUrl: "img/item 2 - gull kopp.png",
           },
        ],

//blir nok endringer i hvordan disse er satt opp når jeg finner ut hvordan jeg skal få de til å fungere
        abilities: [
            {
                id: 0,
                name: "randomDmg",
                desciption: "do 1 damage to random enemy before battle begins",
                function: "",

            },
            {
                id: 1,
                name: "moreDmgPerHit",
                desciption: "get +2 damage per hit",
                function: "",
            },
            {
                id: 2,
                name: "lessAttackToRandomEnemy",
                desciption: "give 1 random enemy -2 attack (can't go lower than 1) before battle",
                function: "",
            },
            {
                id: 3,
                name: "randomEnemyScalingDmgTaken",
                desciption: "make 1 random enemy take 1 more damage per hit before battle per hit",
                function: "",
            },
            {
                id: 4,
                name: "shopCharacterDiscount",
                desciption: "discount on 1 shop character (only works 1 time)",
                function: "",
            },
            {
                id: 5,
                name: "giveFirstCharacterInLineMoreAttack",
                desciption: "give +2 attack to the 1st character",
                function: "",
            },
            {
                id: 6,
                name: "takeLessDmgPerHit",
                desciption: "take 1 less damage per hit",
                function: "",
            },
            {
                id: 7,
                name: "ShopItemDiscount",
                desciption: "discount on 1 shop item (only works 1 time)",
                function: "",
            },
            {
                id: 8,
                name: "critChance",
                desciption: "10% chance of doing double damage",
                function: "",
            },
            {
                id: 9,
                name: "dodgeChance",
                desciption: "20% chance of not taking damage",
                function: "",
            },
            {
                id: 10,
                name: "healthToFirstCharacterInLine",
                desciption: "give +2 health to the 1st character",
                function: "",
            },
            {
                id: 11,
                name: "attackSecondCharacterInLine",
                desciption: "attack 2nd character in line if any instead of 1st",
                function: "",
            },
            {
                id: 12,
                name: "summonSelf",
                desciption: "summon a 1/1 of itself",
                function: "",
            },
            {
                id: 13,
                name: "lifeSteal",
                desciption: "recover 1 health per attack",
                function: "",
            },
            {
                id: 14,
                name: "giveCoinPerBattle",
                desciption: "give 1 extra coin per battle",
                function: "",
            },
            {
                id: 15,
                name: "returnDmgToRandomEnemyWhenTakingDamage",
                desciption: "deal 1 dmg to random enemy when taking damage",
                function: "",
            },

        ]
    },

}