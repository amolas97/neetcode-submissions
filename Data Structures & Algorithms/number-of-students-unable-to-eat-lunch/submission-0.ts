class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {
        let eaten: number = 0;
        let st = [...students];
        let sw = [...sandwiches];
        let i = 0;
        let total = st.length
        while(st.length > 0 && i < total && sw.length > 0){
            const e = st[0];
            if (e === sw[0]) {
                eaten++
                st.shift();
                sw.shift();
            } else {
                const student = st.shift();
                st.push(student);
            }
            i++
        }
        if(st.length === 0 || sw.length === 0 || eaten === 0 ){
            return st.length
        }
        return this.countStudents(st, sw);
    }
}
