/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */

    quickSort2(pairs: Pair[], st: number, end: number){
        if((end - st) + 1 === 0){
            return pairs
        }

        let s = st;
        let pivot = end
        for(let i = s; i < pivot; i++){
            if(pairs[pivot].key > pairs[i].key){
                let temp = pairs[s];
                pairs[s] = pairs[i];
                pairs[i] = temp;
                s++                
            } 
        }

        let pt = pairs[pivot];
        pairs[pivot] = pairs[s];
        pairs[s] = pt;

        this.quickSort2(pairs, st, s - 1);
        this.quickSort2(pairs, s + 1, end)

        return pairs;

    }

    quickSort(pairs: Pair[]): Pair[] {
        if(pairs.length === 1){
            return pairs;
        }

        let s = 0;
        let pivot = pairs.length - 1;

        return this.quickSort2(pairs, s, pivot);

    }
}
