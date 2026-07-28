class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    memo = {
        0: 0,
        1: 1,
        2: 2,
    }

    climbStairs(n: number): number {
        if(!this.memo[n]){
            this.memo[n] = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        }
        return this.memo[n]
    }
}