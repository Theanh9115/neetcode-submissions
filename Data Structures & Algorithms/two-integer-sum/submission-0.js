class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dic = new Map();
        for (let i = 0; i < nums.length; i++){
            if (dic.has(target - nums[i])) return [dic.get(target-nums[i]), i];
            if (!dic.has(nums[i])) dic.set(nums[i], i);
            
        }
    }
}   
