//get the first letter from the name 
// Samah Alasawdih : S.H

function fullName(name){
    let arr =  name.split (" ");
    return(arr[0][0]+'.'+arr[1][0]).toUpperCase;

}