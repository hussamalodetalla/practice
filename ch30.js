//Checking if 2 Objects have the Same Data
//first we need to check the length, second has the same properties, finlay the values

function compareObject(obj1,obj2){
    let objOneLength = Object.keys(obj1);//return an array 
    let objTwoLength = Object.keys(obj2);//return an array
    if(objOneLength.length ===objTwoLength.length){
if(objOneLength.every(key => objTwoLength.hasOwnProperty(key) && obj1[key]==obj2[key]));
  //if(objOneLength.every(key => objTwoLength.hasOwnProperty(key) && obj1.key==obj2.key))  // other way 
}
 else 
    return false;
}