// حذف كلمة من مجموعة كلمات و استبدالها بكلمة أخرى , 

let str = 'the array in javascript is important, you can use array for many thing. arrays are great'

let newStr = str.replace(/array/gi , 'object');// this is the first way
let newStr1= str.split(/array/gi).join('object');// this is the second way 

