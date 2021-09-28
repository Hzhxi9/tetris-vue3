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
    type: number;
    constructor(type = 0) {
        this.x = 0;
        this.y = 0;
        this.type = type
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
        type: 1,
        shape: [
            [1, 1],
            [1, 1]
        ]
    },
    2: {
        type: 2,
        shape: [
            [1, 0, 0],
            [1, 1, 0],
            [0, 1, 0],
        ],
        rotateStrategy: [rotate, (m) => rotate(rotate(rotate(m)))]
    },
    3: {
        type: 3,
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

export function createBoxByType(type) {
    const box = new Box(type);
    const { shape, rotateStrategy } = boxInfos[type];

    box.shape = shape;
    box.setRotates(rotateStrategy)

    return box
}

export function createBox() {
    const { shape, rotateStrategy, type } = getRandomBoxInfo();
    const box = new Box(type);
    box.shape = shape;
    box.setRotates(rotateStrategy)
    return box
}

