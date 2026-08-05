class TreeMapNode {
    constructor(public key: number = 0, public val: number = 0, public left: TreeMapNode | null = null, public right: TreeMapNode | null = null){}
}

class TreeMap {

    root: TreeMapNode;
    constructor() {
        this.root = null;
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key: number, val: number): void {
        const node = new TreeMapNode(key, val);
        if(!this.root){
            this.root = node;
        } else {
            let current = this.root;
            while(current){
                if(key > current.key){
                    if(current.right) current = current.right
                    else current.right = node;
                }
                else if(key < current.key){
                    if(current.left) current = current.left
                    else current.left = node;
                } 
                else {
                    current.val = node.val;
                    break;
                }
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key: number): number {
        if(this.root)
        {
            let current = this.root;
            while(current){
                if(key > current.key){
                    current = current.right
                }
                else if(key < current.key){
                    current = current.left
                } 
                else {
                    return current.val;
                }
            }
        }
        return -1
    }

    /**
     * @returns {number}
     */
    getMin(): number {
        if(this.root)
        {
            let current = this.root;
            while(current.left){
                current = current.left
            }
            return current.val;
        }
        return -1
    }

    /**
     * @returns {number}
     */
    getMax(): number {
        if(this.root)
        {
            let current = this.root;
            while(current.right){
                current = current.right
            }
            return current.val;
        }
        return -1
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key: number): void {
        let parent: TreeMapNode | null = null;
        let current: TreeMapNode | null = this.root;

        while (current && current.key !== key) {
            parent = current;

            if (key < current.key) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        if (!current) return;

        if (current.left && current.right) {
            let successorParent = current;
            let successor = current.right;

            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }

            current.key = successor.key;
            current.val = successor.val;

            parent = successorParent;
            current = successor;
        }

        const child = current.left ?? current.right;

        if (!parent) {
            this.root = child;
        } else if (parent.left === current) {
            parent.left = child;
        } else {
            parent.right = child;
        }
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys(): number[] {
        const response = []
        const stack = [];
        let current = this.root;

        while(current || stack.length > 0){
            while(current){
                stack.push(current)
                current = current.left
            }

            current = stack.pop()!;
            response.push(current.key);
            current = current.right;
        }
        
        return response;
    }
}
