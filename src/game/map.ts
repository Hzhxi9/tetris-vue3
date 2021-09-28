import { gameCol, gameRow } from './index'

/**
 * 初始化地图，生成一个二维数组
 * @param {number[][]} map 
 */
export function initMap(map: number[][]) {
    for (let i = 0; i < gameRow; i++) {
        const arr: number[] = []
        for (let j = 0; j < gameCol; j++) arr.push(0)
        map.push(arr)
    }
    return map
}


export function addBoxToMap(box, map) {
    for (let i = 0, len = box.shape.length; i < len; i++) {
        for (let j = 0, shapeLen = box.shape[0].length; j < shapeLen; j++) {
            const row = box.y + i;
            const col = box.x + j;
            if (box.shape[i][j] > 0) map[row][col] = -1
        }
    }
}

export function eliminateLine(map) {
    const lines: number[] = [];
    for (let i = 0; i < map.length; i++) {
        const arr = map[i];
        const boo = arr.every(v => v === -1);
        if (boo) lines.push(i)
    }

    const mapCol = map[0].length;
    lines.forEach(n => {
        map.splice(n, 1);
        map.unshift(new Array(mapCol).fill(0));
    })
}