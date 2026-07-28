/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs: Pair[]): Pair[][] {
        const response: Pair[][] = []
        const paircp: Pair[] = [...pairs];

        if(paircp.length > 0) response.push([...paircp]);        

        for(let i = 1; i < paircp.length; i++){
            let j = i - 1;

            while(j >= 0 && paircp[j+1].key < paircp[j].key){
                const temp = paircp[j+1];
                paircp[j+1] = paircp[j];
                paircp[j] = temp;
                j--;
            }

            response.push([...paircp])
        }
        return response;
    }
}
