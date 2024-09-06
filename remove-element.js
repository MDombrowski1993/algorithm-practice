var removeElement = function(nums, val) {
    let matches = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
           nums.splice(i, 1);
           i--;
           matches++;
        }
    }
    return matches;
};
let test = [0,1,2,2,3,0,4,2];
removeElement(test, 2);
console.log(test);