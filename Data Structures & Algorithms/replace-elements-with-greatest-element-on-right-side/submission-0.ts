class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let biggest = -1;
        let arrCopy: number[] = [...arr]
        for(let i = arrCopy.length - 1; i >= 0; i--){
            if(arrCopy[i] > biggest){
                let temp = arrCopy[i];
                arrCopy[i] = biggest;
                biggest = temp
            } else {
                arrCopy[i] = biggest
            }
        }
        return arrCopy;
    }
}
