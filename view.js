updateView();
function createHtml() {
    const html = document.getElementById('app');
    html.innerHTML = '';

    const playerHtml = document.createElement('div');
    playerHtml.classList.add('playerInfo');

    // Display hearts for player's health
    const heartsCount = model.data.player.health;
    const heartsHtml = Array(heartsCount).fill('<span class="heart">&hearts;</span>').join('');

    // Display battles won
    const battlesWon = model.data.player.battlesWon;
    const battlesWonText = `Battles Won: ${battlesWon} / 15`; // Win 15 battles to win the game
    const battlesWonDiv = document.createElement('div');
    battlesWonDiv.textContent = battlesWonText;

    // Display player's coins
    const coinsDiv = document.createElement('div');
    coinsDiv.textContent = `Coins: ${model.data.player.coins}`;

    // Append hearts, battles won, and coins to the playerHtml div
    playerHtml.innerHTML = `
        <h3>Your Team</h3>
        <div class="playerStats">
            <div class="hearts">${heartsHtml}</div>
            <div class="battlesWon">${battlesWonText}</div>
            <div class="coins">${coinsDiv.textContent}</div>
        </div>
    `;

    const teamContainer = document.createElement('div');
    teamContainer.classList.add('teamContainer');
    teamContainer.addEventListener('dragover', allowDrop);
    teamContainer.addEventListener('drop', handleDrop);
    
    model.data.player.team.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.classList.add('teamMember');
        characterDiv.setAttribute('draggable', 'true')
        characterDiv.id = `teamMember-${'index'}`;
        characterDiv.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}" class="teamMemberImg">
            <p>Name: ${character.name}</p>
            <p>HP: ${character.health}</p>
            <p>ATK: ${character.attack}</p>
        `;
        teamContainer.appendChild(characterDiv); // Append each team member to the team container
    });
    
    // Append the team container to the playerHtml div
    playerHtml.appendChild(teamContainer);

    // Create the shop section
    const shopHtml = document.createElement('div');
    shopHtml.classList.add('shop');
    shopHtml.classList.add('shopContainer');
    const shopHeader = document.createElement('h3');
    shopHeader.textContent = 'Shop';

    const shopItemList = document.createElement('div');
    shopItemList.classList.add('shopItemList');
    shopItemList.classList.add('flex-container'); // Add flex-container class for flexbox

    const shopCharacters = generateShopCharacters(); // Assume you have a function to generate random shop characters

    shopCharacters.forEach(character => {
        const shopItem = document.createElement('div');
        shopItem.classList.add('shopItem');
        shopItem.id = `shopItem-${character.name}`; // Unique ID for each shop item
        shopItem.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}" class="shopItemImg">
            <p>${character.name}</p>
            <p>HP: ${character.health}</p>
            <p>ATK: ${character.attack}</p>
            <button onclick="buyCharacter('${character.name}')">Buy (3 coins)</button>
        `;
        shopItemList.appendChild(shopItem);
    });

    // Append elements to the HTML
    shopHtml.appendChild(shopHeader); // Add shop header
    shopHtml.appendChild(shopItemList); // Add shop items to shopHtml

    html.appendChild(playerHtml); // Append player info
    html.appendChild(shopHtml); // Append shop
}






function updateView() {
    createHtml(); 
    localStorage.setItem('playerData', JSON.stringify(model.data.player));
}