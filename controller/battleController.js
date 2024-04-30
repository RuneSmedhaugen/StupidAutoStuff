function startBattle() {
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

async function delay(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

async function battlemanager() {
    while (model.data.player.team[0].health >= 0 && model.input.battlePage.enemyTeam[0].health >= 0) {
        await battleview()
        await delay(1)
        model.data.player.team[0].health -= model.input.battlePage.enemyTeam[0].attack
        model.input.battlePage.enemyTeam[0].health -= model.data.player.team[0].attack
        await battleview()
        await delay(1)
        if (model.input.battlePage.enemyTeam[0].health <= 0 && model.input.battlePage.enemyTeam.some(c => c.health > 0)) {
            let ienemy = model.input.battlePage.enemyTeam.findIndex(t => t.health <= 0)
            let newenemy = model.input.battlePage.enemyTeam.splice(ienemy, 1)[0]
            model.input.battlePage.enemyTeam.unshift(newenemy)
        }
        if (model.data.player.team[0].health <= 0 && model.data.player.team.some(c => c.health > 0)) {
            let ifriendly = model.data.player.team.findIndex(t => t.health > 0)
            let newfriendly = model.data.player.team.splice(ifriendly, 1)[0]
            model.data.player.team.unshift(newfriendly)
        }
        await battleview()
        await delay(1)
    }
    console.log(model.data.player.team, model.input.battlePage.enemyTeam)
    await battleview()
    model.data.player.team.forEach(h => h.health = h.maxhealth)
    model.data.player.coins = 10
}

async function battleview() {
    app.innerHTML = /*HTML*/ `
    <div id="battleparent">
    
    <div id="friendlyroster">${gencards('friendly')}</div>
    
    <div id="friendlead">${gencards('friendly', 'lead')}</div>
    
    <div id="button">${checkend()}</div>
    
    <div id="enemylead">${gencards('enemy', 'lead')}</div>
    
    <div id="enemyroster">${gencards('enemy')}</div>

    </div>
    `
}

function gencards(team, lead) {
    let who = team === 'friendly' ? model.data.player.team : model.input.battlePage.enemyTeam;
    if (lead) return genwho(who[0])
    else return who.slice(1).map(p => genwho(p)).join('')
}

function genwho(who) {
    return /*HTML*/`
    <div id="cardparent">
        <div>
            <div>${who.health + `/`+ who.maxhealth}</div>
            <img src="${who.imageUrl}" style="width: 10vw; height:auto">
        </div>
    </div>
    `;
}

function checkend() {
    if (model.input.battlePage.enemyTeam.some(c => c.health > 0) && model.data.player.team.some(c => c.health > 0)) return ''
    let message = null
    model.data.player.team[0].health > 0 && model.input.battlePage.enemyTeam[0].health <= 0 ? 'Du vant' :
        model.data.player.team[0].health <= 0 && model.input.battlePage.enemyTeam[0].health > 0 ? 'Du tapte' :
            'Det ble uavgjort'
    if (model.data.player.team[0].health > 0 && model.input.battlePage.enemyTeam[0].health <= 0) message = 'Du Vant'
    else if (model.data.player.team[0].health <= 0 && model.input.battlePage.enemyTeam[0].health > 0) message = 'Du Tapte'
    else message = 'Det ble uavgjort'
    return message + `<button onclick="updateView()">Gå tilbake til start</button>`
}



