/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let response = [];
        this.check(root, response, k);
        return response[k - 1];
    }

    check(root, response, k){
        if(root){
            this.check(root.left, response, k);
            response.push(root.val)
            if(response.length === k) return;
            this.check(root.right, response, k);
        }
    }
}
