// we need to count the number of occurences of a particular value in an array
// حساب عدد مرات ظهور رقم داخل مصفوفة

let scores = [100,90,85,100,60,85,100,90,55,75,60];
function accountVal(arr,val){
 arr.reduce((acc,elem)=>{
return(val===elem ? acc+1 : acc)
},0);
};
