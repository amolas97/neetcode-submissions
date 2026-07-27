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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        let c1 = list1;
        let c2 = list2;
        let dummy = new ListNode(0,null);
        let current = dummy;
        while(c1 || c2){
            if(c1 && c2){
                if (c1.val > c2.val){
                    current.next = c2
                    c2 = c2.next
                } 
                else {
                    current.next = c1
                    c1 = c1.next
                }
            } 
            else if (c1) {
                current.next = c1;
                c1 = c1.next
            }
            else {
                current.next = c2;
                c2 = c2.next
            }
            current = current.next
        }
        return dummy.next;
    }
}
