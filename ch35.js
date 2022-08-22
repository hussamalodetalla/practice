//uses of reduce in javascript 
// find the non duplicated element in the array 
function uniEle(arr){
    arr.reduce((acc,ele)=>{
         (arr[acc]!=ele); return arr[acc];
    },[])
}
//what is the sum of the prices 
let product = [
    {name: "apple" , price:260},
    {name : "orange" , price:123},
    {name:"kiwi" , price:333}
];
let sum = product.reduce((acc,ele) =>
 acc + ele.price ,0)
 return sum;

 // concat the array 
 let arr1=[
    [0,1],
    [2,3],
    [4,5]
 ];
 let flatArray = arr.reduce((acc,ele)=> 
 acc.concat(ele)
 ,[]);

 //https://www.youtube.com/watch?v=M0ga9tuIIwE&list=PLrvHCesHYw3_sgDBJMpTPcCCttEtrlB9y&index=6


 //count the duplicate of each elements 
 let cars = [
    'car' ,
    'truk' ,
    'car',
'bike' ,
'car'];

 arr.reduce((accObj,ele)=> {
      if (!accObj.ele){
        accObj.ele = 0
       }
       accObj++ 
       return accObj 
    }
 ,
 {}) ;
 // find missing ele 
let arr = A .sort();
 arr.reduce ((acc,ele)=>{
if(ele != acc){
return acc;
 }
acc++
}
 ,1);
 // other way to find the missing number 

 let n = arr.length ;
 let sumArray =n * (n+1)/2 ;
 let truSum = 0;
 for(i=0; i<n ;i++ ){

    truSum=truSum+arr[i];
    if (sumArray!=truSum){
        return sumArray - truSum;
    }
 }