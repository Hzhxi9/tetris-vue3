/**
 * 
 * @param matrix 
 * @returns 
 */
export function getBottomPoints(matrix) {
    const points: any = []
    const row = matrix.length
    matrix[row - 1].forEach((_, i) => {
        points.push({
            x: i,
            j: row - 1
        })
    })
    return points
}