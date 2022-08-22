function likeOrDislike(arr){
    let result = 'Nothing';
    for(i=0; i<=arr.length;i++){
        if(arr[i]==='like'){
        if(result==='like'){
            return 'Nothing';
        }else{
            result ='like';
        }

    }
if(arr[i]==='Dislike'){
    if( result==='Dislike'){
        result = 'Nothing';
    }
    else{
        result = 'Dislike';
    }
}
    }
    return result;
}

//we can cse reduce in advanced way 
const buttonButton = arr =>
reduce((acc,item)=>
acc ===item ?'Nothing' : item 
,'Nothing');