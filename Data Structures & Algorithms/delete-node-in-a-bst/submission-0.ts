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
     * @param {number} key
     * @return {TreeNode}
     */
    findMinimum(root){
        while(root.left){
            root = root.left;
        } 
       return root;
    }

    deleteNode(root: TreeNode | null, key: number): TreeNode | null {
        if(!root){
            return null
        }
        if(key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if(!root.right){
                return root.left
            } else if (!root.left){
                return root.right
            }
            let successor = this.findMinimum(root.right);
            root.val = successor.val;
            root.right = this.deleteNode(root.right, successor.val);
            }
        return root;
    }
}
