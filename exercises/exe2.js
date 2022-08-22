
//1. TreeHeight
//Compute the height of a binary tree.
//function solution(T);

// that, given a non-empty binary tree T consisting of N nodes, returns its height. For example, given tree T shown in the figure above, the function should return 2, as explained above. Note that the values contained in the nodes are not relevant in this task.


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
    return branches (T);
}
function branches(T){
    if(! T) {
        return -1;
    }
    //A binary tree can be given using a pointer data structure. Assume that the following declarations are given:

// Tree obj is an Object with attributes
// obj.x - type: int
// obj.l - type: Tree
// obj.r - type: Tree
//https://www.youtube.com/watch?v=67VyhnAO8ak
    let left = branches(T.l);
    let right = branches(T.r);
return  1+Math.max(left,right);
}

/// هنالك طريقة أخرى بتحول الاوبجيكت شجرة الى بيانات  جيسون 
//
function solution(T){
   let str=  JSON.stringify(T);
   let count = -1;
   let max = 0;
   for (let i = 0; i < tString.length; i++) {
       if (tString[i] === '{') {
           count++;
           max = Math.max(max, count);
       } else if (tString[i] === '}') {
           count--;
       }
   }
   return max;

}