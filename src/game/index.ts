import Box from "./Box";

import { initMap } from "./map";
import { getBottomPoints } from "./matrix";
import { render } from "./render";
import { addTicker } from "./ticker";
import { intervalTimer } from "./utils";

export * from "./config";

export function startGame(map: number[][]) {
    initMap(map);

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
    const points = getBottomPoints(box.shape);

    const mapRow = map.length;

    const boo = points.some((point) => point.y + box.y + 1 >= mapRow)

    if (boo) return

    box.y++
}