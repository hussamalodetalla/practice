// count how much time true included the array 


function countTrue(arr){
    const count = arr.filter(boolean).length;
    return count;
}

// or this way

function countTrue(arr){
    var count = 0;
    for(i=0; i<arr.length ; i++){
        if (arr[i]===true){
            count ++
        }
    }
    return count;
}