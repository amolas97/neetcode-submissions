class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    /**
 Do not return anything, modify nums1 in-place instead.
 */


    merge(nums1: number[], m: number, nums2: number[], n: number): void {
        let li = m - 1;
        let ri = n - 1;
        let end = m+n - 1;

        while(end >= 0){
            if(li < 0){
                nums1[end] = nums2[ri];
                ri--;
            } else if (ri < 0){
                nums1[end] = nums1[li];
                li--;
            } else {
                if(nums1[li] > nums2[ri]){
                    nums1[end] = nums1[li];
                    li--;
                } else {
                    nums1[end] = nums2[ri];
                    ri--;
                }
            }
            end--;
        }
        console.log('arr', nums1);
    };
}
