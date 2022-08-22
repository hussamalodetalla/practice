//استخدامات splice ()

arr.splice (2)
//remove elements ()every thing after 2)  from index 2
//exp : [a,b,c,d,e] output : [c,d,e]
arr.splice(-3)
//from the back 3 steps, and remove every thong from back to enf steps
// exp: [a,b,c,d,e] output : return[c,d,e]
arr.splice(1,2)// remove elements from index 1 to index 2
// output : [b,c]
arr.splice(-2,2)//remove the last two elements from the array
//output : [d,e]

arr.splice(1,1,t,z) // add in the index 1, and we want to delete one parameter and dd  two parameters t,z , then every thing shift over and remove b 

//exp: [a,b,c,d,e] output  : [a,t,z,c,d,e
// if we want to remove element we can sp rewrite over it 
