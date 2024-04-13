updateView();
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

 
    const coinsDiv = document.createElement('div');
    coinsDiv.textContent = `Coins: ${model.data.player.coins}`;

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
        teamContainer.appendChild(characterDiv); 
    });
    
    
    playerHtml.appendChild(teamContainer);

    
    const shopHtml = document.createElement('div');
    shopHtml.classList.add('shop');
    shopHtml.classList.add('shopContainer');
    const shopHeader = document.createElement('h3');
    shopHeader.textContent = 'Shop';

    const shopItemList = document.createElement('div');
    shopItemList.classList.add('shopItemList');
    shopItemList.classList.add('flex-container'); 

    const shopCharacters = generateShopCharacters(); 

    shopCharacters.forEach(character => {
        const shopItem = document.createElement('div');
        shopItem.classList.add('shopItem');
        shopItem.id = `shopItem-${character.name}`;
        shopItem.innerHTML = `
            <img src="${character.imageUrl}" alt="${character.name}" class="shopItemImg">
            <p>${character.name}</p>
            <p>HP: ${character.health}</p>
            <p>ATK: ${character.attack}</p>
            <button onclick="buyCharacter('${character.name}')">Buy (3 coins)</button>
        `;
        shopItemList.appendChild(shopItem);
    });

    
    shopHtml.appendChild(shopHeader); 
    shopHtml.appendChild(shopItemList); 

    html.appendChild(playerHtml); 
    html.appendChild(shopHtml);
}






function updateView() {
    createHtml(); 
    localStorage.setItem('playerData', JSON.stringify(model.data.player));
}