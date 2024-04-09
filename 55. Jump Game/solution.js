/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    /** Greedy Approach Solution */
    let lastPosition = nums.length - 1;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (i + nums[i] >= lastPosition) {
            lastPosition = i;
        }
    }

    return lastPosition === 0; 
};