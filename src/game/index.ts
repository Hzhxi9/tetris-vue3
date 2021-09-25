import { initMap } from "./map";

export const gameRow = 10;
export const gameCol = 10;


export function startGame(map: number[][]) { 
    initMap(map)
}