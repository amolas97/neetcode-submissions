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
     * @return {number[]}
     */
    inorderTraversal(root: TreeNode | null): number[] {
        const response: number[] = []
        this.check(root, response)
        return response;
    }

    check(root, response){
        if(root){
            this.check(root.left, response);
            response.push(root.val);
            this.check(root.right, response);
        }
    }
}
