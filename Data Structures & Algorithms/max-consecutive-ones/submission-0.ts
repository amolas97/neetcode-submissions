class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let maxConsecutiveOnes = 0;
        let currentConsecutiveOnes = 0;
        for(let i = 0; i < nums.length; i++){
            let current = nums[i]          
            if(current === 1){
                currentConsecutiveOnes += 1
            } else {
                currentConsecutiveOnes = 0;
            }
            if(currentConsecutiveOnes > maxConsecutiveOnes) maxConsecutiveOnes = currentConsecutiveOnes;
        }
        return maxConsecutiveOnes
    }
}
