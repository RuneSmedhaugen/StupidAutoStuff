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
    const numShopItems = 5;

    for (let i = 0; i < numShopItems; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shopCharacters.push(characters[randomIndex]);
    }

    return shopCharacters;
}

function startBattle(){

}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const sourceId = event.dataTransfer.getData('text/plain');
    const sourceElement = document.getElementById(sourceId);
    const targetElement = event.target.closest('.teamMember');
    if (targetElement) {
        const sourceIndex = parseInt(sourceId.split('-')[1]);
        const targetIndex = parseInt(targetElement.id.split('-')[1]);
        
        const temp = model.data.player.team[sourceIndex];
        model.data.player.team[sourceIndex] = model.data.player.team[targetIndex];
        model.data.player.team[targetIndex] = temp;
        
        targetElement.parentNode.insertBefore(sourceElement, targetElement);
    }
}