// TieRopes
//Tie adjacent ropes to achieve the maximum number of ropes of length >= K.

function solution(A,k){
    let n = A.length;
    if(n===k){
        return 1;
    }
let result = 0;
let acc = 0;
for(i=0;i<n;i++){
    result +=A[i];
    if(result>=k){
        acc++;
        result = 0 ;
    }
    
}
return acc;
}
// reduce

