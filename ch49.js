//JavaScript Problem: Eloquent JavaScript Exercise - Range and Sum Functions
function sumValues(start,end){
    var arr = [] ,
    cnt = start;
    while(cnt<=end){
        arr.push(cnt);
        cnt++
    }
    
   function total(arr){
    let sum = 0;
    while(arr.length>0){
sum = sum+arr.pop();
    }
    return sum;
   }    

}

// other way to get at total 
function totalOne(arr){
var total = 0 ;
for(i=0;i<arr.length; i++){
    total = total+arr[0];
}


}