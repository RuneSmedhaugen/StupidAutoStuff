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
        <button class="battleButton" onclick="createBattleHtml()">Battle!</button>
    `;

    const teamContainer = document.createElement('div');
    teamContainer.classList.add('teamContainer');

    const podiums = Array(5).fill(null); 

   
    model.data.player.team.forEach((character, index) => {
        if (index < 5) {
            podiums[index] = character; 
        }
    });

    
    const podiumContainer = document.createElement('div');
    podiumContainer.classList.add('podiumContainer');



    podiums.forEach((character, index) => {
        const podium = document.createElement('div');
        podium.classList.add('podium');
        podium.id = `podium-${index + 1}`;

        if (character) {
            const characterDiv = document.createElement('div');
            characterDiv.classList.add('teamMember');
            characterDiv.id = `teamMember-${character.name}`;
            characterDiv.innerHTML = `
                <img src="${character.imageUrl}" alt="${character.name}" class="teamMemberImg">
                <p>Name: ${character.name}</p>
                <p>HP: ${character.health}</p>
                <p>ATK: ${character.attack}</p>
                <button class="switchLeftBtn" onclick="switchToPodiumLeft(${index})">Left</button>
                <button class="switchRightBtn" onclick="switchToPodiumRight(${index})">Right</button>
            `;
            podium.appendChild(characterDiv);
        } else {
            podium.innerHTML = 'Empty';
        }

        podiumContainer.appendChild(podium);
    });

    teamContainer.appendChild(podiumContainer);
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
            <p> Ability: ${character.ability.name}</p>
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
    
}