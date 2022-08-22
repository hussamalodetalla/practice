//swap first and last character of a string 
// the middle characters stay the same
//hello => oellh

function swap(str){
    const length = str.length;
   return ( str.charAt(length - 1) + str.substring (1 , length -1) + str.charAt(0));
     
}