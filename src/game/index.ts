import { createBox } from "./Box";
import { hitBottomBoundary, hitBottomBox } from "./hit";
import { initMap, eliminateLine, addBoxToMap } from "./map";
import { render } from "./render";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";

export * from "./config";

let activeBox;
export function startGame(map: number[][]) {
    /**初始化地图 */
    initMap(map);

    /*创建一个盒子 */
    activeBox = createBox();

    let timeInterval = 1000;
    const isDown = intervalTimer(timeInterval);
    function handleTicker(n) {
        if (isDown(n)) moveDown(activeBox, map);
        render(activeBox, map);
    }
    addTicker(handleTicker);

    window.addEventListener('keydown', (e) => {
        switch (e.code) {
            case 'ArrowLeft':
                activeBox.x--
                break;
            case 'ArrowRight':
                activeBox.x++
                break;
            case 'ArrowUp':
                activeBox.rotate()
                break;
        }
    })
}

export function moveDown(box, map) {
    if (hitBottomBoundary(box, map) || hitBottomBox(box, map)) {
        addBoxToMap(box, map);
        eliminateLine(map);
        activeBox = createBox();
        return;
    }
    box.y++
}