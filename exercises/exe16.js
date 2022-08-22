// move the frog from position 0 to position x+1
// x  the number of positions of the bridge to form the leaves to cross the river
// arr[i]  array contains the position that the leaves wil fall in at
// time i seconds
/*
steps:
1-create an array s  with values x values 
each value is a position in a lake
2- hash pointing to these position (references the position in thr lake)
hash is key mapped 
hash faster than searching in entire array
3- we use do not use the Hash in this case because we have the index and the remaining distance 
to determine whether the leaf is at that position 
already , or not
4- Iterate through the time array, and when the leaf is not in the position 
, we substract  1 from the remaining bridge parts

5-when the remaining bridge parts is equal to zero, we return that amount of time
*/
function solution (x,arr){
    let S = new Array(x);
    let remainingDis = x;
for(let i=0; i<arr.length; i++){
    let curLeafPos=arr[i];
    if(S[curLeafPos]!=1){
        S[curLeafPos]=1;
        remainingDis--;

    }
    if(remainingDis==0) return i;
}
return -1; // if the frog can not cross
}


