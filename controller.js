//så langt jeg kom på tirsdag etter å ha startet på nytt

function generateShopCharacters() {
    const shopCharacters = [];
    const characters = model.data.characters;
    const numShopItems = 5; 

    for (let i = 0; i < numShopItems; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shopCharacters.push(characters[randomIndex]);
    }

    return shopCharacters;
}
