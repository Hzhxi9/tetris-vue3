import Game from "./Game";

import { createBox } from "./Box";
import { message } from "./message";
import { addTicker } from "./ticker";
import { intervalTimer } from './utils'
import { moveDownTimeInterval } from './config'


export default class Player {
    private _game: Game;
    constructor(game: Game) {
        this._game = game;
        this._game.setCreateBoxStrategy(this.createBoxStrategy.bind(this));
        window.addEventListener('keydown', this.handleBoxMoveDown.bind(this))
    }

    createBoxStrategy() {
        const box = createBox();
        message.emit('create', {
            box: {
                type: box.type
            }
        })
        return box
    }

    start() {
        addTicker(this.handleBoxMoveDown.bind(this))
    }

    _isDown = intervalTimer(moveDownTimeInterval);
    handleBoxMoveDown(n) {
        if (!this._game) return;
        if (this._isDown(n)) {
            this._game.moveBoxDown();
            message.emit('moveDown')
        }
    }

    handleKeyDown(e) {
        switch (e.code) {
            case 'ArrowLeft':
                this._game.moveBoxToLeft();
                message.emit('left')
                break;
            case 'ArrowRight':
                this._game.moveBoxToRight();
                message.emit('right')
                break;
            case 'ArrowUp':
                this._game.rotateBox();
                message.emit('rotate')
                break;
            default:
                break;
        }
    }
}