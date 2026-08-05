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
    rightSideView(root: TreeNode | null): number[] {
        if(!root) return [];
        
        const queue = []
        const response: number[] = []
        queue.push(root);

        while(queue.length > 0){
            const queueLength = queue.length;
            for(let i = 0; i < queueLength; i++){
                const node = queue.shift();
                if(i === queueLength - 1) response.push(node.val);
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
        }
        return response;
    }
}
