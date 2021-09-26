
/**
 *  定义一个移动的方块
 */
export default class Box {
    // 描述一个移动的方块
    shape: number[][]; 
    // 描述一个移动方块的位置
    x: number; 
    y: number;
    constructor() {
        this.x = 0;
        this.y = 0;
        this.shape = [
            [1, 1],
            [1, 1]
        ]
    }
}