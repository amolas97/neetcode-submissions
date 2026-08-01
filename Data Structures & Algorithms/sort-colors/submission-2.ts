class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): void {
        const bucket: number[] = [0,0,0];
        for(let k = 0; k< nums.length; k++){
            bucket[nums[k]] += 1;
        }
        let i = 0;
        for(let n = 0; n < bucket.length; n++){
            for(let j = 0; j < bucket[n]; j++){
                nums[i] = n;
                i++
            }
        }
    }
}
