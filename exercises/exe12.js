// distinct values in the array
//we need an empty hash set {} to check if the value 
//store the numbers in the hash set

function solution (arr){
 let acc=0;
 let distinctNum = {};
 for(i=0;i<arr.length;i++){
    currentNum=arr[i];
    if(distinctNum[currentNum]!=1){
        distinctNum[currentNum]=1;
        acc++
    }
 }
 return acc;
   
}

//هون ننشء هاش سيت فاضي, وبعدين منعمل للوب على كل عنصر, ومنصير نخزنه جوا الهاش سيت
// بعد مانخزنه منعطيه قيمة واحد
// هون منفحص بالاول تانشوف هل عندو قيمة واحد ولا لا