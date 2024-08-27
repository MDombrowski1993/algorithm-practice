// https://leetcode.com/problems/spiral-matrix-ii/
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {

    const outputMatrix = [];
    let top = 0;
    let right = n - 1;
    let bottom = n - 1;
    let left = 0;
    let value = 1;

    for (let i = 0; i < n; i++) {
        outputMatrix[i] = new Array(n);
    }

    while (top <= bottom) {
        // Populate top
        for (let i = left; i <= right; i++) {
            outputMatrix[top][i] = value;
            value++;
        }
        top++;

        // Populate right
        for (let i = top; i <= bottom; i++) {
            outputMatrix[i][right] = value;
            value++;
        }
        right--;

        // Populate bottom
        for (let i = right; i >= left; i--) {
            outputMatrix[bottom][i] = value;
            value++;
        }
        bottom--;

        // Populate left
        for (let i = bottom; i >= top; i--) {
            outputMatrix[i][left] = value;
            value++;
        }
        left++;
    }

    return outputMatrix;
};
console.log("~~~~~~3~~~~~~~~");
console.log(JSON.stringify(generateMatrix(3)));
console.log("~~~~~~4~~~~~~~~");
console.log(JSON.stringify(generateMatrix(4)));
console.log("~~~~~~10~~~~~~~~");
console.log(JSON.stringify(generateMatrix(10)));