//JavaScript Problem: Comparing Objects in an Array and remove the duplicated value 

function getArray (arr) {
    arr.map (function(ele) {
    if (typeof ele === "Object" && ele != null){
return JSON.stringify(ele);
    }
  else 
  return ele;  
    }
    );
}

let set = new Set (...getArray(arr1), ...getArray(arr1)); // call the function 
let newArray = [...set];