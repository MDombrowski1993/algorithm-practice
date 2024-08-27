//https://leetcode.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const maxIndex = matrix.length - 1;
    matrix.forEach((row, rowIndex) => {
        // For each row, push the contents to the array from outside in
        // Use shift to remove value and push to new spot
        for(let colIndex = 0; colIndex <= maxIndex; colIndex++){
            matrix[colIndex].push(matrix[maxIndex - rowIndex].shift());
        }
    });

};
let mat = [[1,2,3],[4,5,6],[7,8,9]];
rotate(mat)
//console.log(mat);
let crazyMat = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
rotate(crazyMat);
console.log(crazyMat);