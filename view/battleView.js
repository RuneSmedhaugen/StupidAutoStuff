createBattleHtml();

function createBattleHtml() { 
    const html = document.getElementById('app');
    html.innerHTML = '';
    const playerTeamSize = model.data.player.team.length;
    const enemyTeam = generateEnemyTeam(playerTeamSize);


    html.innerHTML = /*HTML*/`
    <div id="battle-log">
    <h2>Battle!</h2>
    <div class="battle-log">Battle log:</div>
    <div id="player-team" class="player-team">
        <h3>Your Team</h3>
        ${model.data.player.team.map(character => `
            <div class="character">
                <img src="${character.imageUrl}" alt="${character.name}" class="character-img">
                <p>${character.name}</p>
                <p>HP: ${character.health}</p>
                <p>ATK: ${character.attack}</p>
            </div>
        `).join('')}
    </div>
    <div id="enemy-team" class="enemy-team">
        <h3>Enemy Team</h3>
        ${generateEnemyTeam().map(character => `
            <div class="character">
                <img src="${character.imageUrl}" alt="${character.name}" class="character-img">
                <p>${character.name}</p>
                <p>HP: ${character.health}</p>
                <p>ATK: ${character.attack}</p>
            </div>
        `).join('')}
    </div>
    <button onclick="startBattle()">Start Battle</button>
</div>
`;
}

function generateEnemyTeam(playerTeamSize) {
    const enemyTeam = [];
    const characters = model.data.characters;

    while (enemyTeam.length < playerTeamSize) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        enemyTeam.push(characters[randomIndex]);
    }

    return enemyTeam;
}
