

function generateShopCharacters() {
    const shopCharacters = [];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * characterData.length);
        const randomCharacter = characterData[randomIndex];
        shopCharacters.push(randomCharacter);
    }
    return shopCharacters;
}

function buyCharacter(characterName) {
    const character = characterData.find(char => char.name === characterName);
    if (!character) return; // Character not found

    if (player.coins >= 3 && player.team.members.length < 5) {
        player.coins -= 3; 
        player.team.addMember(character);
        document.getElementById('coinSystem').textContent = `Coins: ${player.coins}`;
        document.getElementById('yourTeam').textContent = `Your team: ${player.team.members.map(member => member.name).join(', ')}`;
    } else {
        if (player.coins < 3) {
            alert("Not enough coins!");
        } else {
            alert("Maximum team size reached!");
        }
    }
}


function startBattle() {
    player.coins = 10;
    battleInProgress = true;
    const enemyTeam = generateEnemyTeam(); // Generate a random enemy team
    const yourTeam = player.team.members; // Get your team's characters

    // Display both teams before battle results
    displayTeams(yourTeam, enemyTeam);

    // Proceed with battle simulation
    simulateFight(yourTeam, enemyTeam);
}


function displayTeams(yourTeam, enemyTeam) {
    const html = document.getElementById('app');

    const yourTeamHtml = yourTeam.map(character => `<div>${character.name}</div>`).join('');
    const enemyTeamHtml = enemyTeam.map(character => `<div>${character.name}</div>`).join('');

    const teamsHtml = `
        <div>Your Team:</div>
        <div>${yourTeamHtml}</div>
        <div>Enemy Team:</div>
        <div>${enemyTeamHtml}</div>
        <div id="battleStatus"</div>
    `;

    html.innerHTML = teamsHtml;
}

function endBattle(winningTeam, yourTeamText, enemyTeamText) {
    const battleResultsHtml = `
        <div id="battleResults">
            <h2>Battle Results</h2>
            <div id="yourTeamResults">${yourTeamText}</div>
            <div id="enemyTeamResults">${enemyTeamText}</div>
            <button onclick="returnToShop()">Return to Shop</button>
        </div>
    `;

    // Append the battle results to the app container
    const appContainer = document.getElementById('app');
    appContainer.innerHTML += battleResultsHtml;
}


function returnToShop() {
    // Reset each character's stats in the player's team
    player.team.members.forEach(character => {
        const originalCharacter = characters.find(char => char.name === character.name);
        if (originalCharacter) {
            character.health = originalCharacter.health;
            character.attack = originalCharacter.attack;
        }
    });

    // Clear the battle results and return to the shop view
    battleInProgress = false;
    updateView(); // Update the view to display the shop menu
}

function simulateFight(yourTeam, enemyTeam) {
    let round = 1;

    // Loop until one team is defeated
    while (anyCharacterAlive(yourTeam) && anyCharacterAlive(enemyTeam)) {
        // Process the current round of battle
        processRound(round, yourTeam, enemyTeam);

        // Increment the round counter
        round++;
    }

    // Determine the battle outcome and display results
    const winningTeam = anyCharacterAlive(yourTeam) ? yourTeam : enemyTeam;
    const yourTeamText = anyCharacterAlive(yourTeam) ? 'Your Team: Victory!' : 'Your Team: Defeated!';
    const enemyTeamText = anyCharacterAlive(yourTeam) ? 'Enemy Team: Defeated!' : 'Enemy Team: Victory!';

    // Call endBattle to display results
    endBattle(winningTeam, yourTeamText, enemyTeamText);
}

function processRound(round, yourTeam, enemyTeam) {
    // Process actions for each character in the round
    yourTeam.forEach(yourCharacter => {
        // Attack the enemy in the same position
        const enemyCharacter = enemyTeam[yourTeam.indexOf(yourCharacter)];
        if (enemyCharacter && yourCharacter.health > 0 && enemyCharacter.health > 0) {
            simulateFight(yourCharacter, enemyCharacter); // Simulate the fight between characters
        }
    });
}

function simulateFight(yourCharacter, enemyCharacter) {
    // Simulate the battle between two characters
    enemyCharacter.health -= yourCharacter.attack;
    yourCharacter.health -= enemyCharacter.attack;
}




function anyCharacterAlive(team) {
    // Check if team is an array and if any character in the team has health greater than 0
    return Array.isArray(team) && team.some(character => character.health > 0);
}

function generateEnemyTeam() {
    const enemyTeam = [];
    for (let i = 0; i < player.team.members.length; i++) {
        // Generate random enemy characters with similar stats to your characters
        const randomIndex = Math.floor(Math.random() * characterData.length);
        const randomCharacter = characterData[randomIndex];
        enemyTeam.push(new Character(randomCharacter.name, randomCharacter.health, randomCharacter.attack, randomCharacter.imageUrl));
    }
    return enemyTeam;
}

function processRound(round, yourCharacter, enemyCharacter) {
    const damageToEnemy = Math.max(0, yourCharacter.attack - enemyCharacter.defense); // Assuming characters have a defense property
    const damageToYou = Math.max(0, enemyCharacter.attack - yourCharacter.defense);

    enemyCharacter.health -= damageToEnemy;
    yourCharacter.health -= damageToYou;

    displayBattleStatus(round, yourCharacter, enemyCharacter);
}

function displayBattleStatus(round, yourCharacter, enemyCharacter) {
    const battleStatusContainer = document.getElementById('battleStatus');
    const roundInfo = document.createElement('div');
    roundInfo.textContent = `Round ${round}: Your ${yourCharacter.name} attacks enemy ${enemyCharacter.name}.`;
    battleStatusContainer.appendChild(roundInfo);
}