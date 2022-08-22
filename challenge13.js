// combining arrays and removing any duplicate values
let arr1=["samah", "hussam" ,"Aous" ,"obadah" ,"moh"];
let arr2=["Lol","Aous","samah","Rami"];
//let arr3= [].concat(arr1,arr2);//way1 
let arr3=[...arr1,...arr2]; 

let set = new Set(arr3);//to remove the duplicated values
let newArray= [...set]// to convert set to array