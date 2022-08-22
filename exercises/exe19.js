/*
Task description
You are given an array A consisting of N integers.

For each number A[i] such that 0 ≤ i < N, we want to count the number of elements of the array that are not the divisors of A[i]. We say that these elements are non-divisors.

For example, consider integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 1
    A[2] = 2
    A[3] = 3
    A[4] = 6
For the following elements:

A[0] = 3, the non-divisors are: 2, 6,
A[1] = 1, the non-divisors are: 3, 2, 3, 6,
A[2] = 2, the non-divisors are: 3, 3, 6,
A[3] = 3, the non-divisors are: 2, 6,
A[4] = 6, there aren't any non-divisors.


*/

function solution(A) {
    // write your code in JavaScript (Node.js 6.4.0)
    
    const divisors = A.map(e => 0); // نعبي المصفوفة أصفار كقيمة أولية , 
    
    for (let i = 0; i<A.length; i++) {
        let e = A[i];
        for (let j = i+1; j<A.length; j++) {
            let f = A[j];
            if (f % e === 0) {
                divisors[j]++;
            }
            if (e % f === 0) {
                divisors[i]++;
            }
        }        
    }
    
    const res = divisors.map(e => A.length - e - 1);
//    console.log("res: ", res);
    return res;
    
}

//my solution

function solution (a){
    let acc= 0;
    let accArray=[];
    for(i=0;i<a.length;i++){
        for(j=0;j<n;j++){
            if(a[i] % a[j]!==0){
                acc++;
                accArray.push(acc);
                acc=0;
            }
        }
    }
    return accArray;
}