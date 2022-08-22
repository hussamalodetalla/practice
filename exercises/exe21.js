
/*
les 10
1. Peaks
Divide an array into the maximum number of same-sized blocks, each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
*/
function solution (A){
    let arr=[];
    let arr2=[];
    for(let i=1;i<=A.length;i++){
if(A[i]>A[i+1]&&A[i]>A[i-1])
arr.push(i);
    }
   
    for(i=0;i<=A.length;i++){
        if(A.length%i===0){
           
let arr2= spliceIntoChunks(A,i)
        }
    }
    function spliceIntoChunks(arr, chunkSize) {
        const res = [];
        while (arr.length > 0) {
            const chunk = arr.splice(0, chunkSize);
            res.push(chunk);
        }
       
    }
    function findCommonElement(array1, array2) {
     
        // Loop for array1
        for(let i = 0; i < array1.length; i++) {
             
            // Loop for array2
            for(let j = 0; j < array2.length; j++) {
                 
                // Compare the element of each and
                // every element from both of the
                // arrays
                if((array1[i] === array2[j][0])||(array1[i] === array2[j][1])) {
                 
                    // Return if common element found
                    return true;
                }
            }
        }
         
        // Return if no common element exist
        return false;
    }
    if(findCommonElement(arr,arr2))


}
