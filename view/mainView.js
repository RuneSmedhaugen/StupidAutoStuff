updateView();
function createHtml() {
    const html = document.getElementById('app');
    html.innerHTML = `
    <div id="mainDiv">
        <div class="playerInfo">
            <h3>Your Team</h3>
            <div class="playerStats">
                ${Array(model.data.player.health).fill('<span class="heart">&hearts;</span>').join('')}
                <div class="battlesWon">Battles Won: ${model.data.player.battlesWon} / 15</div>
                <div class="coins">Coins: ${model.data.player.coins}</div>
            </div>
            <button class="battleButton" onclick="createBattleHtml()">Battle!</button>
        </div>
        <div class="teamContainer">
            <div class="podiumContainer">
                ${model.data.player.team.slice(0, 5).map((character, index) => `
                    <div class="podium" id="podium-${index + 1}">
                        ${character ? `
                            <div class="teamMember" id="teamMember-${character.name}">
                                <img src="${character.imageUrl}" alt="${character.name}" class="teamMemberImg">
                                <p>Name: ${character.name}</p>
                                <p>HP: ${character.health}</p>
                                <p>ATK: ${character.attack}</p>
                                <button class="switchLeftBtn" onclick="switchToPodiumLeft(${index})">Left</button>
                                <button class="sellButton" onclick="sellCharacter('${character.name}')">Sell (+1 coin)</button>
                                <button class="switchRightBtn" onclick="switchToPodiumRight(${index})">Right</button>
                            </div>
                        ` : 'Empty'}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="shopContainer">
            <h3>Shop</h3>
            <div class="shopItemList flex-container">
                ${generateShopCharacters().map(character => `
                    <div class="shopItem" id="shopItem-${character.name}">
                        <img src="${character.imageUrl}" alt="${character.name}" class="shopItemImg">
                        <p>${character.name}</p>
                        <p>HP: ${character.health}</p>
                        <p>ATK: ${character.attack}</p>
                        <p>Ability: ${character.ability.desciption}</p>
                        <button onclick="buyCharacter('${character.name}')">Buy (3 coins)</button>
                    </div>
                `).join('')}
            </div>
        </div>
    </div>
        `;
}


function updateView(){
    createHtml();
}