
function minMax(arr) {


let x= Math.max(...arr);
let y= Math.min(...arr);
return[y,x];
}
// خل أخر 

function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for ( let i=0 ; i<arr.length; i++){
        if (arr[i]>max){
            max=arr[i];
        }
    }
    
    for ( let i=0 ; i<arr.length; i++){
        if (arr[i]<min){
            min=arr[i];
        }
    }  
return [min,max];
}