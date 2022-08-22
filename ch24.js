//reverse array with out using reverse funtion 
function rev(arr){
    for(i=0; i< Math.floor((arr.length)/2);i++){

        [arr[i] , arr[arr.length-1-i]]=[arr[arr.length-1-i],arr[i]];
    }
 return arr;
}