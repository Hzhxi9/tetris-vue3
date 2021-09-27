/**
 * 
 * @param matrix 
 * @returns 
 */
export function getBottomPoints(matrix) {
    const points: any = []
    const row = matrix.length
    matrix[row - 1].forEach((_, i) => {
        if (matrix[row - 1][i] > 0) {
            points.push({
                x: i,
                y: row - 1
            })
        }

    })
    return points
}

export function rotate(matrix) {
    const temp: any[] = [];
    const row = matrix.length;
    const col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const newRow: number = row - 1 - j;
            if (!temp[newRow]) temp[newRow] = []
            temp[newRow][i] = matrix[i][j]
        }
    }
    return temp
}