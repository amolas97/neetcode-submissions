class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let biggest = -1;
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] > biggest){
                let temp = arr[i];
                arr[i] = biggest;
                biggest = temp
            } else {
                arr[i] = biggest
            }
        }
        return arr;
    }
}
