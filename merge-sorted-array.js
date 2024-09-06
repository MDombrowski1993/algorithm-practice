//https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m, n, ...nums2);
    nums1.sort((a,b) => a - b);
};
let arr = [1,2,3,0,0,0];
let test = [0,1,2,3,4,5,6,7,8,9];
merge(arr, 3, [2,5,6], 3)
console.log(arr);
test.splice(3,0,'foobar');
console.log(test);