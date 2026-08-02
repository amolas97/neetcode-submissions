class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let m = matrix.length;
        let n = matrix[0].length;

        let start = 0;
        let end = (m * n) - 1;

        while(start <= end){
            let mid = Math.floor((end - start) / 2) + start;
            let midM = Math.floor(mid / n);
            let midN = mid % n;
            const e = matrix[midM][midN]
            if(e === target) return true;
            if(e < target) start = (midM * n) + midN + 1;
            else end = (midM * n) + midN - 1
        }
        return false;
    }
}
