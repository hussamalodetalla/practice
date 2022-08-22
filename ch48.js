//JavaScript Problem: Computing a Fibonacci Sequence
function fibonacci (arr,n){
var n1=arr[0],
    n2=arr[1],
    next,
    cnt=2;
    while(cnt<n){
        next = n1+n2 ;
        n1=n2;
        n2=next;
        arr.push(next);
        cnt++;
    }
    return arr;
}