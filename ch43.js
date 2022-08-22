// count how many letter o in the string
function countLetter (str){
    let ac1 = [...str].reduce((acc,ele)=>{
    if(ele.tolowercase()==='o'){
       return  acc++;
        
    }else 
    return acc;
    }
    ,0);
}

// return (ele.toLowercase() === 'o' ? acc++ : acc) // advanced way