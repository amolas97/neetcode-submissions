/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n: number): number {
        let left = 0;
        let right = n;
        let mid = Math.floor((left + right) / 2)
        while(left <= right){
            let res = guess(mid);
            if(res === 0) break;
            if(res === -1) right = mid - 1;
            if(res === 1) left = mid + 1;
            mid = Math.floor((left + right) / 2);
        }
        return mid
    }
}
