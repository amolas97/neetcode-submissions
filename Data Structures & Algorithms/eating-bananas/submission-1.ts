class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */

    getTotalNumber(piles, k): number{
        let totalHours = 0;
        for(let i = 0; i < piles.length; i++){
            totalHours += Math.ceil(piles[i] / k)
        }
        return totalHours;
    }

    minEatingSpeed(piles: number[], h: number): number {
        let right = Math.max(...piles);
        let left = 1
        let mid = 0;
        while(left < right){
            mid = Math.floor((right + left) / 2);
            const th = this.getTotalNumber(piles, mid);
            if(th <= h){
                right = mid;
            } else {
                left = mid + 1
            }
        }
        return right;
    }
}
