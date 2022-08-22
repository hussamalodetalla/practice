
/*les 8
Dominator: the value that occurs in more than the half of the elements of A 
Find an index of an array such that its value occurs at more than half of indices in the array

*/
function solution(A) {
    const arr = []
    for (let i=0; i<A.length; i++){
      if (!arr[A[i]])
        arr[A[i]] = 1
      else
        arr[A[i]]++
      if (arr[A[i]] > A.length/2)
        return i
    }
    return -1
}

/*1 sep 1 : create an empty array 
2- loop through the array A 
3- step 2: check if the element is al ready in the array
if yes increase if not store 1
4-if the element is the arr >A,length/2, return i*/
