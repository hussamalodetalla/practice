
//1. TennisTournament
// Given the numbers of players and available courts, calculate the maximum number of parallel tennis games.
function solution(P, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    return Math.min(Math.floor(P / 2), C)
}