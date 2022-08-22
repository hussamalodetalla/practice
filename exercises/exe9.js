//Compute number of distinct absolute values of sorted array elements.
//

function solution(A) {
    let n = A.length;
    for (let i in A) {
      if (A[i] < 0) {
        A[i] = Math.abs(A[i]);
      } else {
        break;
      }
    }
    A.sort((a, b) => a - b);
    let r = 1;
    for (let i = 1; i < n; i++) {
      if (A[i] - A[i - 1] > 0) {
        r++;
      }
    }
    return r;
  }
  // my solution 

  function solution (A){
    let n= A.length ;
    for(i in A){
        if(A[i]>0){
            A[i]=Math.abs(A[i]);
        }
        else {
            break;
        } 
    }
    let A1= new Set(A);
    return A1.size;
  }