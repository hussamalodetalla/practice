// clone the array//
//[1,2,3[1,2,3]]
//["x","y","z"["x","y,"z"]]

function clone(arr){
    const arr2= [];
    arr2.push(arr)
    return arr.concat(arr2);
}