class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const newArr = new Array<number>(nums.length * 2);

        for(let i = 0; i < newArr.length; i++){
            let j = i % nums.length;
            newArr[i] = nums[j]; 
        }

        return newArr;
    }
}
