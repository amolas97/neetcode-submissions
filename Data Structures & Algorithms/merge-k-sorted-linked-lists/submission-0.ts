/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists: ListNode[]): ListNode {
        let head = new ListNode(0, null);
        let current: ListNode = head;
        let pointers: ListNode[] = [...lists];
        let nullPointersCount: number;
        while(nullPointersCount !== pointers.length){
            let minPointer: number = 0;
            nullPointersCount = 0
            for(let j = 0; j < pointers.length; j++){
                let cp = pointers[j];
                if(cp === null) {
                    if(minPointer === j) minPointer++
                    nullPointersCount += 1;
                    continue;
                } 
                if(cp.val < pointers[minPointer].val){
                    minPointer = j
                }
            }
            if(nullPointersCount !== pointers.length) {
                current.next = pointers[minPointer];
                current = pointers[minPointer];
                pointers[minPointer] = pointers[minPointer].next
            }
        }
        return head.next;
    }
}
