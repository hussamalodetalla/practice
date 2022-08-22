
/*
 CommonPrimeDivisors
Check whether two numbers have the same prime divisors.
Task description
A prime is a positive integer X that has exactly two distinct divisors: 1 and X. The first few prime integers are 2, 3, 5, 7, 11 and 13.

A prime D is called a prime divisor of a positive integer P if there exists a positive integer K such that D * K = P. For example, 2 and 5 are prime divisors of 20.

You are given two positive integers N and M. The goal is to check whether the sets of prime divisors of integers N and M are exactly the same.

For example, given:

N = 15 and M = 75, the prime divisors are the same: {3, 5};
N = 10 and M = 30, the prime divisors aren't the same: {2, 5} is not equal to {2, 3, 5};
N = 9 and M = 5, the prime divisors aren't the same: {3} is not equal to {5}
*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if(A[i] === B[i]) {
            count++;
        } else {
            let div = gcd(A[i], B[i]);
            if (check(A[i], div) && check(B[i], div)) {
                count++;
            }
        }
    }
    return count;
}

function gcd(a, b) {
    let small = Math.min(a, b);
    let big = Math.max(a,b);
    if (big % small === 0) {
        return small;
    } else {
        return gcd(small, big % small);
    }
}

function check(a, b) {
    let val = gcd(a, b);
    if (val === a) {
        return true;
    } else if (val === 1) {
        return false;
    } else {
        a /= val;
        val = gcd(a, val);
        return check (Math.max(a, val), Math.min(a, val));
    }
}