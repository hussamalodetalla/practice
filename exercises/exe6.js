// we create new array in this array we put the maximum value , that we can get 
// a : [1,-2,0,9,-1,-2] , ap is a new array with max of value we can get :[1,-1,1,10,9,8]
// 1. NumberSolitaire
// In a given array, find the subset of maximal sum in which the distance between consecutive elements is at most 6.


function solution(A) {
    var n = A.length;
    var dp = new Array(n);
    
    dp[0] = A[0];

    for (var i = 1; i < n; i++) {
        var max = dp[i - 1] + A[i];

        for (var j = 1; j <= 6; j++) {
            if (i - j >= 0) {
                max = Math.max(dp[i - j] + A[i], max);
            }
        }

        dp[i] = max;
    }

    return dp[n - 1];
}