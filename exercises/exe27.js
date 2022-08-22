/*
A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length === 0) {
        return 1;
    } else if (S.length % 2 === 1) {
        return 0;
    }
    let A = S.split('');
    let open = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === '(') {
            open++;
        } else {
            open--;
        }
        if (open === -1) {
            return 0;
        }
    }
    return open === 0 ? 1 : 0;
}