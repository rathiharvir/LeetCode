/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let unique = new Set(nums)
    nums.length = 0
    nums.push(...unique)
};