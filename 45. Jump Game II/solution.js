/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    /** Greedy Approach */
    let totalJumps = 0;

    let destination = nums.length - 1

    let coverage = 0, lastJumpIndex = 0

    if(nums.length == 1) return 0;

    for(let i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i])
        
        if(i == lastJumpIndex) {
            lastJumpIndex = coverage
            totalJumps++

            if(coverage >= destination) {
                return totalJumps;
            }
        }
    }

    return totalJumps;
};