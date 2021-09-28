import Game from "./Game";
import { message } from "./message";
import { createBoxByType } from "./Box";

export default class Rival {
    private _game: Game;
    public _boxInfo: any;
    constructor(game: Game) {
        this._game = game;
        this._game.setCreateBoxStrategy(this.createBoxStrategy.bind(this));
        message.on('left', this.handleLeft.bind(this))
        message.on('right', this.handleRight.bind(this))
        message.on('rotate', this.handleRotate.bind(this))
        message.on('moveDown', this.handleDown.bind(this))
        message.on('createBox', this.handleCreateBox.bind(this))
    }

    createBoxStrategy() {
        return createBoxByType(this._boxInfo.box.type)
    }

    handleCreateBox(info) {
        this._boxInfo = info
    }

    handleDown() {
        this._game.moveBoxDown()
    }

    handleLeft() {
        this._game.moveBoxToLeft()
    }

    handleRight() {
        this._game.moveBoxToRight()
    }

    handleRotate() {
        this._game.rotateBox()
    }
}