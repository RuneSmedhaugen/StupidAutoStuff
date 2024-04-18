function startBattle(){
    const playerCharacter = model.input.battlePage.playerTeam[0];
    const enemyCharacter = model.input.battlePage.enemyTeam[0];
    const playerDamage = playerCharacter.attack;
    const enemyDamage = enemyCharacter.attack;

    enemyCharacter.health -= playerDamage;
    playerCharacter.health -= enemyDamage;

    const battleLog = `Your ${playerCharacter.name} attacks for ${playerDamage} damage.
    </b>
    Enemy ${enemyCharacter.name} attacks for ${enemyDamage} damage.
    ` ;

    model.input.battlePage.battleLog.push(battleLog);

    if (enemyCharacter.health <= 0) {
        model.input.battlePage.enemyTeam.shift();

        const enemyDefeatLog = `Enemy's ${enemyCharacter.name} has been defeated!`;
        model.input.battlePage.battleLog.push(enemyDefeatLog);
    }
    if (playerCharacter.health <= 0) {
        const playerDefeatLog = `Your ${playerCharacter.name} has been defeated!`;
        model.input.battlePage.battleLog.push(playerDefeatLog);
    }
    updateView();
}

