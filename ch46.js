//Identifying the Location(s) of a Value in an Array
function findPosition(arr,val){
     return arr.reduce((acc,ele,index)=>
    (ele===val ? [...acc , index] : acc) ,[])
}

