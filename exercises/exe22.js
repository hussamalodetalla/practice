
/*les9
1. MaxSliceSum
Find a maximum sum of a compact subsequence of array elements.
*/


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxEnd = 0;
    let maxSlice = -2147483648;
    for (let val of A) {
        maxEnd = Math.max(val, maxEnd + val);
        maxSlice = Math.max(maxSlice, maxEnd);
    }
    return maxSlice;
}

//في البداية أعمل قيم أوليى 
// بعدين نبدا بالللوب 