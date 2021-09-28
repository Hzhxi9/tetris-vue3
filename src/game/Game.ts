import Box, { createBox } from './box';
import { render } from './render';
import { addBoxToMap, eliminateLine } from './map';
import { hitBottomBoundary, hitBottomBox } from './hit'

export default class Game {
    private _map: number[][];
    private _activeBox: any;
    private _createBoxStrategy: any;
    constructor(box, map) {
        this._map = map;
        this._activeBox = box;
        this._createBoxStrategy = createBox
    }

    render() {
        render(this._activeBox, this._map)
    }

    moveBoxToLeft() {
        this._activeBox.x--
    }

    moveBoxToRight() {
        this._activeBox.x++
    }

    rotateBox() {
        this._activeBox.rotate()
    }

    moveBoxDown() {
        if (hitBottomBoundary(this._activeBox, this._map) || hitBottomBox(this._activeBox, this._map)) {
            addBoxToMap(this._activeBox, this._map);
            eliminateLine(this._map)
            this._activeBox = this._createBoxStrategy();
            return;
        }
        this._activeBox.y++
    }

    setBox(box: Box) {
        this._activeBox = box;
    }

    setCreateBoxStrategy(strategy) {
        this._createBoxStrategy = strategy
    }
}