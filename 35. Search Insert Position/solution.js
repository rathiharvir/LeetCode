/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    for(i = 0; i < nums.length; i++) {
        if(nums[0] > target) {
            break;
        } else if(nums[i] === target) {
            break;
        } else if ( i === nums.length) {
            i++;
            break;
        } else if (nums[i + 1] > target) {
            i++;
            break;
        }
    }
    return i
};