// //"racecar"

// the function should return 3, because the substring to the left of the character "e" at index 3 is "rac", and the one to the right is "car.
 function solution (A){
    let arr = A.split(" ");
    let n = arr.length;
    if(n % 2 ===0){
        return -1;
    }
    else if(n % 2===1){
    return 0;
  }
  else {
    let n1= Math.floor(n%2);
    let arr1 =arr.slice(0,n1-1);
    let arr2=arr.slice(n1+1);
    if(arr1===arr2.reverse()){
      return n1;
    }
   A = (arr1.concat(arr2)).join('');
  }
 
  
 }
