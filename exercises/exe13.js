// MinAbsSumOfTwo
//Find the minimal absolute value of a sum of two elements.
//when we need two for loops in this case is better to sort the array

function solution (arr){
    let n = arr.length;
    let arr2=[];
    if(n===1){
        return(Math.abs(arr[0]*2));
    }
arr.sort((a,b)=>a-b);
for (i=0;i<n;i++){
    for(j=0;j<n;j++){
        arr2.push(Math.abs(arr[i]+arr[j]));
    }
}
return Math.min(arr2);
}