class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const resp = [];
        function dfs(i:number=0, newTarget: number, combinations: number[],){
            if(newTarget === target){
                resp.push([...combinations])
                return;
            }

            if(i >= nums.length || newTarget > target){
                return
            }

            combinations.push(nums[i]);
            dfs(i, newTarget + nums[i], combinations);
            combinations.pop()
            dfs(i + 1, newTarget, combinations)
        }

        dfs(0, 0, []);
        return resp;
    }
}
