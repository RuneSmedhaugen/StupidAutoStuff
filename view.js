createHtml();

function createHtml() {
    const html = document.getElementById('app');
    html.innerHTML = '';

    const playerHtml = document.createElement('div');
    playerHtml.classList.add('playerInfo');
    

    const heartsCount = model.data.player.health;
    const heartsHtml = Array(heartsCount).fill('<span class="heart">&hearts;</span>').join('');
    

    const battlesWon = model.data.player.battlesWon;
    const battlesWonText = `Battles Won: ${battlesWon} / 15`;
    const battlesWonDiv = document.createElement('div');
    battlesWonDiv.textContent = battlesWonText;
    
    playerHtml.innerHTML = `
        <h3>Stupid Auto Stuff</h3>
        <div class="playerStats">
            <div class="hearts">${heartsHtml}</div>
            <div class="battlesWon">${battlesWonText}</div>
        </div>
        <div id="battleButton">
        <button onclick="startBattle" class="battleButton">Battle!</button>
        </div>
    `;
    
    model.data.player.team.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('teamMember');
        characterDiv.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}" class="teamMemberImg">
            <p>Name: ${character.name}</p>
            <p>HP: ${character.health}</p>
            <p>ATK: ${character.attack}</p>
        `;
        playerHtml.appendChild(characterDiv);
    });

    // Create the shop section
    const shopHtml = document.createElement('div');
    shopHtml.classList.add('shop');
    shopHtml.classList.add('shopContainer');

    const shopHeader = document.createElement('h3');
    shopHeader.textContent = 'Shop';
    const shopCharacters = generateShopCharacters(); // Assume you have a function to generate random shop characters

    shopCharacters.forEach(character => {
        const shopItem = document.createElement('div');
        shopItem.classList.add('shopItem');
        shopItem.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}" class="shopItemImg">
            <p> ${character.name}</p>
            <p>HP: ${character.health}</p>
            <p>ATK: ${character.attack}</p>
            <button onclick="buyCharacter('${character.name}')">Buy (3 coins)</button>
        `;
        shopHtml.appendChild(shopItem);
    });


    playerHtml.style.marginBottom = '400px';

    html.appendChild(playerHtml);
    html.appendChild(shopHtml);
}

// Example function to generate random shop characters
function generateShopCharacters() {
    const shopCharacters = [];
    const characters = model.data.characters;
    const numShopItems = 5; // Number of items to display in the shop

    for (let i = 0; i < numShopItems; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shopCharacters.push(characters[randomIndex]);
    }

    return shopCharacters;
}
