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

        //Har ikke tenkt ut abilities enda
        characters: [
            {
                name: "crawliphant",
                health: 5,
                attack: 1,
                imageUrl: "img/crawliphant.png",
                ability: "",
            },
            {
                name: "narwall",
                health: 3,
                attack: 4,
                imageUrl: "img/narwall.png",
                ability: "",
            },
            {
                name: "susage",
                health: 2,
                attack: 5,
                imageUrl: "img/Susage.png",
                ability: "",
            },
            {
                name: "cheesy",
                health: 3,
                attack: 2,
                imageUrl: "img/Cheesy.png",
                ability: "",
            },
            {
                name: "cooki",
                health: 1,
                attack: 5,
                imageUrl: "img/cooki.png",
                ability: "",
            },
            {
                name: "hamburglar",
                health: 4,
                attack: 3,
                imageUrl: "img/hammy2.png",
                ability: "",
            },
            {
                name: "kirky",
                health: 5,
                attack: 1,
                imageUrl: "img/Kirky.png",
                ability: "",
            },
            {
                name: "kolera",
                health: 3,
                attack: 10,
                imageUrl: "img/Kolera.png",
                ability: "",
            },
            {
                name: "Piggy",
                health: 1,
                attack: 5,
                imageUrl: "img/piggy.png",
                ability: "",
            },
            {
                name: "pink",
                health: 5,
                attack: 3,
                imageUrl: "img/pink.png",
                ability: "",
            },
            {
                name: "Stikky",
                health: 2,
                attack: 4,
                imageUrl: "img/Stikky.png",
                ability: "",
            },
            {
                name: "vilmaa",
                health: 6,
                attack: 2,
                imageUrl: "img/vilmaa.png",
                ability: "",
            },

        ],

        items: [
            //ingenting enda, dette er litt mer "nice to have"
        ],

    },

}