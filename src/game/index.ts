import Game from "./Game";
import Rival from './Rival';
import Player from './Player';

import { initMap } from "./map";
import { addTicker } from "./ticker";
import { createBox, createBoxByType } from "./Box";
import { initMessage, message } from "./message";

export * from "./config";

let selfGame: Game;
let rivalGame: Game;
let player: Player;
let rival: Rival;

export function initSelfGame(map) {
    const box = createBox();

    selfGame = new Game(box, initMap(map));
    player = new Player(selfGame);

    message.emit('initSelfGame', {
        box: {
            type: box.type,
        }
    })
}

export function initRivalGame(map) {
    rivalGame = new Game(null, initMap(map));
    rival = new Rival(rivalGame);

    message.on('initSelfGame', (info) => {
        rivalGame.setBox(createBoxByType(info.box.type))
    })
}

let isStarted = false
export function startGame() {
    isStarted = true;
    player.start()
}


export function initGame() {
    initMessage()
}


addTicker(() => {
    if (!isStarted) return;
    selfGame.render();
    rivalGame.render();
})