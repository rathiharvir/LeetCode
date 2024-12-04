function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while(left < right) {
        // Same as Math.floor((left + right) / 2)
        const mid = (left + right) >> 1;
        if(nums[mid] >= target) {
            right = mid; 
        } else {
            left = mid + 1;
        }
    }

    return nums[left] === target ? left : -1;
};