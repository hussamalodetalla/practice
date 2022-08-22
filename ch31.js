//JavaScript Problem: Checking if Two Arrays are Equal
function checkArrays(arr1,arr2){

arr1.toString()===arr2.toString();//first approach
arr1.join(',')===arr2.join(',');//second approach

arr1.sort().toString() === arr2.sort().toString();//third approach
}


