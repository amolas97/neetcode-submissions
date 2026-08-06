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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if(!root) return false;
        console.log(targetSum);
        if(targetSum === root.val && !root.left && !root.right) return true;
        let newTarget = targetSum - root.val

        if(this.hasPathSum(root.left, newTarget)){
            return true;
        }
        if(this.hasPathSum(root.right, newTarget)){
            return true;
        }

        return false;
    }
}
