
updateView();

function createHtml() {
    const html = document.getElementById('app');
    let battleResults = '';

    // Display shop list
    const shopCharacters = generateShopCharacters();
    let shopListHtml = '';

    shopCharacters.forEach(character => {
        shopListHtml += `
            <div class="character">
                <p>Name: ${character.name}</p>
                <img src="${character.imageUrl}" alt="${character.name}" class="characterImg" onclick="buyCharacter('${character.name}')">
                <p>HP: ${character.health}</p>
                <p>ATK: ${character.attack}</p>
            </div>
        `;
    });

    // Display player's team and coins
    const playerTeamHtml = `
        <button onclick="startBattle()" id="startBattle">Start battle!</button>
        <div id="yourTeam">Your Team: ${player.team.members.map(member => member.name).join(', ')}</div>
        <div id="coinSystem">Coins: ${player.coins}</div>
    `;

    html.innerHTML = /*HTML*/ `
        ${playerTeamHtml}
        <div id="shopList">
            Shop: ${shopListHtml}
        </div>
        ${battleResults}
    `;
}


function returnToShop() {
    // Return to the shop after the battle
    battleInProgress = false;
    updateView();
}

function updateView(){
    if (battleInProgress) {
        startBattle();
    } else {
        createHtml();
    }
}