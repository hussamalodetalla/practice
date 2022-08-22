
// Given a large integer as a string str, the task is find the number of matchsticks required to represent it. 


var sticks = [ 6, 2, 5, 5, 4, 5, 6, 3, 7, 6 ]
 
// Function to return the count of
// matchsticks required to represent
// the given number
function countSticks(str, n)
{
    var cnt = 0;
 
    // For every digit of the given number
    for (var i = 0; i < n; i++) {
 
        // Add the count of sticks required
        // to represent the current digit
        cnt += (sticks[str[i] - '0']);
    }
 
    return cnt;
}