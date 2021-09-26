import Box from "./Box";

import { initMap } from "./map";
import { getBottomPoints } from "./matrix";
import { render } from "./render";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";

export * from "./config";

export function startGame(map: number[][]) {
    /**初始化地图 */
    initMap(map);

    /*创建一个盒子 */
    const box = new Box();
    box.x = 1;
    box.y = 3;

    let timeInterval = 1000;
    const isDown = intervalTimer(timeInterval);
    function handleTicker(n) {
        if (isDown(n)) moveDown(box, map);
        render(box, map);
    }
    addTicker(handleTicker);

    window.addEventListener('keydown', () => {
        box.y++;
    })
}

export function moveDown(box, map) {
    /**获取边界 */
    const points = getBottomPoints(box.shape);

    const mapRow = map.length;

    /**判断是否触碰边界 */
    const boo = points.some((point) => point.y + box.y + 1 >= mapRow)

    if (boo) return

    box.y++
}