const player1 = {
    name: 'Scorpion',
    hp: 78,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['axe', 'sword'],
    attack: function () {
        console.log(name + ' ' + 'Fight...');
    }
};


const player2 = {
    name: 'Kitana',
    hp: 34,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['mace', 'dagger'],
    attack: function () {
        console.log(name + ' ' + 'Fight...');
    }
};

function createPlayer(classs, obj) {
    const arenas = document.querySelector('div .arenas');

    const $player = document.createElement('div');
    $player.classList.add(classs);

    const $progBar = document.createElement('div');
    $progBar.classList.add("progressbar");
    $player.appendChild($progBar);

    const $lifeBar = document.createElement('div');
    $lifeBar.classList.add("life");
    $lifeBar.style.width = `${obj.hp}%`;
    $progBar.appendChild($lifeBar);


    const $nameTag = document.createElement('div');
    $nameTag.classList.add("name");
    $nameTag.innerText = obj.name;
    $progBar.appendChild($nameTag);
    

    const $charImg = document.createElement('div');
    $charImg.classList.add("character");
    $charImg.innerHTML = `<img src=${obj.img} />`;

    $player.appendChild($progBar);
    $player.appendChild($charImg);
    arenas.appendChild($player);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
