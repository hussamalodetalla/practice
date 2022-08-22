// practice slice , filter, join, split

//to get the fist 5 character from the string //
const cha1= str => str.slice(0 , 5);


//last 5 characters of the string
function cha2(str){
    return str.slice(str.length-5);

}
// all characters in the string from back

function cha3(str){
  return  str.split('').reverse().join('');
}

//first 6 characters in the string, start with the 6th character

function cha4(str){
    return str.slice(0,6).split('').reverse().join('');
}

//the last 7 characters and only return odd positioned ones 

function cha5(str){
    return str.slice(str.length -7 )
    .split('')
    .filter((item,index)=>(index + 1) % 2===1)
    .join('');
}

