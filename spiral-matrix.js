// https://leetcode.com/problems/spiral-matrix/description/
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    // Bounds
    let top = 0;
    let right = matrix[0].length - 1;
    let bottom = matrix.length - 1;
    let left = 0;
    while (top < bottom) {

        // Print top row
        for (let i = left; i <= right; i++) { // start at left-bound and print to right-bound
            console.log(matrix[top][i]);
        }
        top++;

        // Print right-most col
        for (let i = top; i <= bottom; i++) { // start at top-bound and print each right-bought item
            console.log(matrix[i][right]);
        }
        right--;

        // Print reverse-order bottom row
        for (let i = right; i >= left; i--) { // start at right-bound and print until left-bound
            console.log(matrix[bottom][i]);
        }
        bottom--;
        // Print reverse-order left most col
        for (let i = bottom; i >= top; i--) {
            console.log(matrix[i][left]);
        }
        left++;

        // If on last row, finish printing cols
        if(top == bottom && left != right) {
            for(let i = left; i <= right; i++){
                console.log(matrix[top][i]);
            }
        }
    }

};
const mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("~~~~~~3x3~~~~~~")
console.log(JSON.stringify(mat));
spiralOrder(mat);

const mat2 = [
    [1, 2, 3, 4, 21],
    [5, 6, 7, 8,22],
    [9, 10, 11, 12,23],
    [13, 14, 15, 16,34]
];
console.log("~~~~~~5x4~~~~~~")
console.log(JSON.stringify(mat2));
spiralOrder(mat2);