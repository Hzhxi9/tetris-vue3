export function render(box, map) {
    /**重置 */
    for (let i = 0, len = map.length; i < len; i++) {
        for (let j = 0, mapLen = map[0].length; j < mapLen; j++) {
            if (map[i][j] > 0) map[i][j] = 0
        }
    }

    for (let i = 0, len = box.shape.length; i < len; i++) {
        for (let j = 0, boxLen = box.shape.length; j < boxLen; j++) {
            const row = i + box.j;
            const col = j + box.x;
            map[row][col] = 1
        }
    }
}