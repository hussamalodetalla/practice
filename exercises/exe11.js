
// 1. CountTriangles
// Count the number of triangles that can be built from a given set of edges.
//An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if it is possible to build a triangle with sides of lengths A[P], A[Q] and A[R]. In other words, triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
function solution(A){
let n = A.length;
if(n<3){
    return 0;
}
function isTriangular(P,Q,R){
    if(A[P] + A[Q] > A[R]&& A[Q] + A[R] > A[P]&&A[R] + A[P] > A[Q]){
        return true;
    }else
     return false;
  
}

for(ip=0;ip<n-2;ip++){
    let iq=ip+1;
    let ir=iq+1
           if( isTriangular(ip,iq,ir)){
            return 1;
           }
        }
    

return 0;
}