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
}
