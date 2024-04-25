

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


function buyCharacter(characterName) {
    const characterIndex = model.data.characters.findIndex(char => char.name === characterName);
    if (characterIndex === -1) return; 

    const character = model.data.characters[characterIndex];
    if (model.data.player.coins >= 3 && model.data.player.team.length < 5) {
        model.data.player.coins -= 3; 
        model.data.player.team.push(character); 

       
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

function generateShopCharacters() {
    const shopCharacters = [];
    const characters = model.data.characters;
    let numShopItems = 5;

    for (let i = 0; i < numShopItems; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shopCharacters.push(characters[randomIndex]);
        
    }

    return shopCharacters;
}


function switchToPodiumLeft() {
    const team = model.data.player.team;
    const firstCharacter = team.shift(); 
    team.push(firstCharacter); 
    updateView();
}

function switchToPodiumRight() {
    const team = model.data.player.team;
    const lastCharacter = team.pop(); // Remove the character from the end
    team.unshift(lastCharacter); // Add the character to the beginning
    updateView(); // Update the view to reflect the changes
}