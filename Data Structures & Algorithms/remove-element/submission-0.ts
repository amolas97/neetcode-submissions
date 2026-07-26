class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums: number[], val: number): number {
        let ri = 0;
        for(let i = 0; i < nums.length; i++){
            let current = nums[i]
            if(current !== val) {
                if(ri !== i){
                    nums[ri] = nums[i]
                }
                ri++;
            }
        }
        return ri;
    }
}
