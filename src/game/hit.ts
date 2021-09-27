import { getBottomPoints } from "./matrix";

export function hitBottomBoundary(box, map) {
    const points = getBottomPoints(box.shape);
    const mapRow = map.length;
    const boo = points.some(point => point.y + box.y + 1 >= mapRow);
    return boo
}

export function hitBottomBox(box, map) {
    const points = getBottomPoints(box.shape);
    
    return points.some(point => {
        const col = point.x + box.x;
        const row = point.y + box.y + 1;
        return map[row][col] < 0
    })
}