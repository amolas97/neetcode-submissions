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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let balance = this.check(root);
        return balance !== -1;
    }

    check(root){
        if(!root) return 0;
        let leftHeight = this.check(root.left);
        if(leftHeight === -1) return -1
        let rightHeight = this.check(root.right);
        if(rightHeight === -1) return -1
        if(Math.abs(leftHeight - rightHeight) > 1) return -1
        return 1 + Math.max(leftHeight, rightHeight) 
    }
}
