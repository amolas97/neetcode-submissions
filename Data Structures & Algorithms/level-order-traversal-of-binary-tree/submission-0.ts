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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        if(!root) return [];

        const queue = [];
        const resp: number[][] = []
        let levels = 0;
        queue.push(root);
        while(queue.length > 0){
            //console.log(levels)
             console.log("another", levels)
            let len = queue.length;
            for(let i = 0; i < len; i++){
                const node = queue.shift();
                if(resp.length === levels){
                    resp.push([node.val])
                } else {
                    resp[levels].push(node.val);
                }
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            levels++
            //console.log(queue);
        }
        return resp;
    }
}
