class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutiveOnes: number = 0;
        let currentConsecutiveOnes: number = 0;
        for(let i = 0; i < nums.length; i++){
            let current: number = nums[i]          
            if(current === 1) currentConsecutiveOnes += 1
            else currentConsecutiveOnes = 0;
            if(currentConsecutiveOnes > maxConsecutiveOnes) maxConsecutiveOnes = currentConsecutiveOnes;
        }
        return maxConsecutiveOnes
    }
}
