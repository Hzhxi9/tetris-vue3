import { rotate } from './matrix'

/**
 *  定义一个移动的方块
 */
export default class Box {
    // 描述一个移动的方块
    shape: number[][];
    // 描述一个移动方块的位置
    x: number;
    y: number;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.shape = [
            [1, 1],
            [1, 1]
        ]
    }

    private _rotates = [];
    private _rotateIdx = 0;
    rotate() {
        const rotateHandle: Function = this._rotates[this._rotateIdx];
        if (!rotateHandle) return;
        this.shape = rotateHandle(this.shape)
        this._rotateIdx++;
        if (this._rotateIdx >= this._rotates.length) this._rotateIdx = 0
    }

    public setRotates(rotates) {
        if (!rotates) return
        this._rotates = rotates
    }
}

const boxInfos = {
    1: {
        shape: [
            [1, 1],
            [1, 1]
        ]
    },
    2: {
        shape: [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
        rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
    },
    3: {
        shape: [
            [1, 0, 0],
            [1, 0, 0],
            [1, 1, 0],
        ],
        rotateStrategy: [rotate, rotate, rotate, rotate]
    }
}

function getRandomBoxInfo() {
    const max = Object.keys(boxInfos).length;
    const type = Math.floor(Math.random() * max) + 1;
    return boxInfos[type]
}

export function createBox() {
    const box = new Box();
    const { shape, rotateStrategy } = getRandomBoxInfo();
    box.shape = shape;
    box.setRotates(rotateStrategy)
    return box
}

