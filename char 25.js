// rotat the array k times 

function rotate(arr, k){
    if(arr.length == 0 || arr==null || arr==undefined) return arr;
    for (i=0 ; i<k ; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
////delete elements from the last of the array and add the to the start, the number of deleted elements equal k

function arrayDel(arr,k){
    let delArr = arr.splice(arr.length-k) // [1,2,3,4,5,6,7] , k=3 output : [5,6,7]
    // from index= 4 we wil delete the array , then we got the deleted array
for (let i =0 ; i< delArr.length ;i++){
    arr.splice(i,0,delArr[i]);// add parameter , and remove 0 parameter // splice can be used as same as unshift 

}

}
// other way to put the last element in the start 
arr3 = [...arr[arr.length-1], ...arr.slice(0,arr.length-2)]