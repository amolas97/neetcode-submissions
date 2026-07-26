class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const st = []
        let record = 0;
        for(let i = 0; i < operations.length; i++){
            const op = operations[i];
            let sum = 0
            if(op === "+") {
                sum = st[st.length - 1] + st[st.length - 2]
                st.push(sum);
            }
            else if(op === "D") {
                sum = st[st.length - 1] * 2;
                st.push(sum)
            }
            else if(op === "C") {
                sum = st.pop() * -1;
            }
            else {
                sum = Number(op)
                st.push(sum)
            }
            record += sum;
        }
        return record
    }
}
