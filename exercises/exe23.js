
/*les 9
1. MaxProfit
Given a log of stock prices compute the maximum possible earning.
*/
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxEnd = 0;
    let maxSlice = 0;
    let curMinVal = A[0]
    for (let i = 1; i < A.length; i++) {
        maxEnd = Math.max(0, A[i] - curMinVal);
        maxSlice = Math.max(maxSlice, maxEnd);
        if (A[i] < curMinVal) {
            curMinVal = A[i];
        }
    }
    return maxSlice;
}