//JavaScript Problem: Replace All Occurrences of a String
// split method can break the string to array in specific location 
// for example : we love javascript a lot, because javascript is a nice language

let str = " we love javascript a lot because javascript is a nice language" ;
let newArray = str.split('javascript');
// out put : ["we love" ,"" a lot a lot because","is a nice language"]
// we can use split and join to replace in the string 
let newString = str.split(/array/i).join('object');
// we can sure use replace method 
let newString1 = str.replace(/array/ig,'object');