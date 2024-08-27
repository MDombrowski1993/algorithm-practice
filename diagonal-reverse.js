//https://leetcode.com/problems/diagonal-traverse/
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const diagOrder = [];
    let x = 0;
    let y = 0;
    let direction = 1; // 1 = climbing, -1 = descending

    function checkHasDiagonalUp(row, col){
        return row > 0 && !!mat.at(row - 1) && mat[row - 1].at(col + 1)
    }

    function checkHasDiagonalDown(row, col){
        return col > 0 && mat.at(row + 1) && mat[row+1].at(col-1);
    }

    while(diagOrder.length != mat.length * mat[0].length) {
        diagOrder.push(mat[x][y]);
        if(checkHasDiagonalUp(x, y)){
            x = x - 1;
            y = y + 1;
        } else if (checkHasDiagonalDown(x, y)) {
            x = x + 1;
            y = y - 1;
        } else {
            y = y + 1;
        }
    }
    return diagOrder;
};

console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));
/**
*0,0 - 0,1 - 1,0 - 2,0 - 1,1 - 0,2 - 1,2 - 2,1 - 2,2
*/