function generateRandomItems() {
    const shopItems = [];
    const items = model.data.items;
    const numShopItems = 3;

    for (let i = 0; i < numShopItems; i++) {
        const randomIndex = Math.floor(Math.random() * items.length);
        shopItems.push(items[randomIndex]);
    }

    return shopItems;
}

function generateShopCharacters() {
    const shopCharacters = [];
    const characters = model.data.characters;
    const numShopCharacters = 5;

    for (let i = 0; i < numShopCharacters; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shopCharacters.push(characters[randomIndex]);
    }

    return shopCharacters;
}

function generateShopContent() {
    const shopContent = [];

    const shopCharacters = generateShopCharacters();
    shopCharacters.forEach(character => {
        shopContent.push({ type: 'character', item: character });
    });

    const shopItems = generateShopItems();
    shopItems.forEach(item => {
        shopContent.push({ type: 'item', item: item });
    });

    return shopContent;
}

function buyCharacter(characterName) {
    const characterIndex = model.data.characters.findIndex(char => char.name === characterName);
    if (characterIndex === -1) return;

    const character = model.data.characters[characterIndex];
    if (model.data.player.coins >= 3 && model.data.player.team.length < 5) {
        model.data.player.coins -= 3;
        model.data.player.team.push(JSON.parse(JSON.stringify(character)));

        const shopItem = document.getElementById(`shopItem-${characterName}`);
        if (shopItem) {
            shopItem.remove();
        }

        updateView();
    } else {
        if (model.data.player.coins < 3) {
            alert("Not enough coins!");
        } else {
            alert("Maximum team size reached!");
        }
    }
}

function switchToPodiumLeft() {
    const team = model.data.player.team;
    const firstCharacter = team.shift();
    team.push(firstCharacter);
    updateView();
}

function switchToPodiumRight() {
    const team = model.data.player.team;
    const lastCharacter = team.pop();
    team.unshift(lastCharacter);
    updateView();
}

function sellCharacter(characterName) {
    const characterIndex = model.data.player.team.findIndex(char => char.name === characterName);
    if (characterIndex !== -1) {
        model.data.player.team.splice(characterIndex, 1);
        model.data.player.coins++;
        updateView();
    }
}

function buyItem(itemName) {
    const itemIndex = model.data.items.findIndex(item => item.name === itemName);
    if (itemIndex === -1) return;

    const item = model.data.items[itemIndex];
    if (model.data.player.coins >= 3) {
        model.data.player.coins -= 3;
        applyItemAbilityToCharacter(item);
        const shopItem = document.getElementById(`shopItem-${itemName}`);
        if (shopItem) {
            shopItem.remove();
        }

        updateView();
    } else {
        alert("Not enough coins!");
    }
}

function applyItemAbilityToCharacter(item) {
}
