/*
. ChocolatesByNumbers
There are N chocolates in a circle. Count the number of chocolates you will eat.
Two positive integers N and M are given. Integer N represents the number of chocolates arranged in a circle, numbered from 0 to N − 1.

You start to eat the chocolates. After eating a chocolate you leave only a wrapper.

You begin with eating chocolate number 0. Then you omit the next M − 1 chocolates or wrappers on the circle, and eat the following one.

More precisely, if you ate chocolate number X, then you will next eat the chocolate with number (X + M) modulo N (remainder of division).

You stop eating when you encounter an empty wrapper.

For example, given integers N = 10 and M = 4. You will eat the following chocolates: 0, 4, 8, 2, 6.

*/


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (N === 1) {
        return 1;
    }
    if (M === 1) {
        return N;
    }
    return N / gcd(N, M);
}

function gcd(a, b) {
    if(a % b === 0) {
        return b;
    } else {
        return gcd(b, a % b);
    }
}