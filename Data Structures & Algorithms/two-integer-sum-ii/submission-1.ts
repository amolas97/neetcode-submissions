class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let right = numbers.length - 1
        let left = 0
        while(left < right){
            if(numbers[right] + numbers[left] > target) right--;
            else if (numbers[right] + numbers[left] < target) left++;
            else return [left + 1, right + 1]
        }
    }
}
