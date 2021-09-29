/**
 * 渲染地图
 * @param {Box} box 移动的方块
 * @param {number[][]} map 当前地图
 */
export function render(box, map) {
    reset(map);
    _render(box, map)
}


export function _render(box, map) {
    /**渲染移动方块的位置 */
    for (let i = 0, len = box.shape.length; i < len; i++) {
        for (let j = 0, boxLen = box.shape[0].length; j < boxLen; j++) {
            const row = i + box.y;
            const col = j + box.x;

            if (box.shape[i][j] > 0) {
                map[row][col] = 1
            }
        }
    }
}

export function reset(map) {
    /**重置地图所有方块 */
    for (let i = 0, len = map.length; i < len; i++) {
        for (let j = 0, mapLen = map[0].length; j < mapLen; j++) {
            if (map[i][j] > 0) map[i][j] = 0
        }
    }
}