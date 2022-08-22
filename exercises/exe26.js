/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.
*/
function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length === 0) {
        return 1;
    } else if (S.length % 2 === 1) {
        return 0;
    }
    let A = S.split('');
    let brackets = [];
    for (bracket of A) {
        if (bracket === '(' || bracket === '[' || bracket === '{') {
            brackets.push(bracket);
        } else if (
            ((bracket === ')') && brackets[brackets.length-1] === '(') ||
            ((bracket === ']') && brackets[brackets.length-1] === '[') ||
            ((bracket === '}') && brackets[brackets.length-1] === '{')
        ) {
           brackets.pop(); 
        } else {
            return 0;
        }
    }
    return brackets.length ? 0 : 1;
}