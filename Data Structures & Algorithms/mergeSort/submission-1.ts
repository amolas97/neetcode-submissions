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

    merge(left: Pair[], right: Pair[]): Pair[]{
        const merged = [];
        let li = 0;
        let ri = 0; 
        while(li < left.length || ri < right.length){
            if(li === left.length){
                merged.push(right[ri]);
                ri++
            } else if (ri === right.length){
                merged.push(left[li]);
                li++
            } else {
                if(right[ri].key < left[li].key){
                    merged.push(right[ri]);
                    ri++
                } else {
                    merged.push(left[li])
                    li++
                }
            }
        }
        return merged;
    }

    mergeSort(pairs: Pair[]): Pair[] {
        if(pairs.length <= 1) {
            return pairs;
        }

        let mid = Math.floor(pairs.length / 2);

        const left = this.mergeSort(pairs.slice(0, mid))
        const right = this.mergeSort(pairs.slice(mid))

        return this.merge(left, right)
    }

}
