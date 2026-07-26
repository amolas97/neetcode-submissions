class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack = []
        const parDict = {
            "{" : "}",
            "(" : ")",
            "[" : "]",
        }
        for(const st of s){
            if(parDict[st]){
                stack.push(parDict[st])
            } else {
                if(stack[stack.length - 1] !== st) return false
                stack.pop()
            }
        }
        return !stack.length
    }
}
