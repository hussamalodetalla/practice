//

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (M < 1 || A.length < 2) {
        return 1;
    }
    
    const LIMIT = 1000000000;
    let count = 0;
    let start  = 0;
    let lastPos = [];
    
    for (let i = 0; i <= M; i++) {
        lastPos[i] = -1;
    }
    
    for (let i = 0; i < A.length && count <= LIMIT; i++) {
        const item = A[i];
        // console.log('-> i, item, start, count, lastPos:', i, item, start, count, lastPos)
        
        if (lastPos[item] + 1 > start) {
            start = lastPos[item] + 1;
        }
        lastPos[item] = i;
        count += i - start + 1;
    }
    
    return count > LIMIT ? LIMIT : count;
}
//

function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = 0;
    let front = 0;
    let back = 0;
    const seen = new Array(M+1).fill(false);
    while (front < A.length && back < A.length){
        while (front < A.length && seen[A[front]] !== true){
            sum += (front-back+1);
            seen[A[front]] = true;
            front += 1;
        }
        while (A[back] !== A[front]){
            seen[A[back]] = false;
            back += 1;
        }
        seen[A[back]] = false;
        back += 1;
    }           
    return Math.min(sum, 1000000000);
}