//JavaScript Problem: Extracting Numbers from a String
//في البداية اذا اردنا قلب سترنغ يحتوي ارقام اذا رقم عادي لدينا عدة طرق 
let str = "98";
// way 1
+str;
//2
str - 0;
//3
str *1;
//4 : parseInt in this way we should always always declare the base of the second parameter // base 10 means regular 10 
parseInt(str,10);
//way 5 
parseFloat(str);
// sometimes we have sting integers with characters: str = "98 meters"still works paseFloat and parseInt if the str starts with number , but if we have more text with more number
//then it's difficult : it'd 98 meter , then difficult ,  and "98 meter and 500 cm ", the output only the fist number
// what we can do?
//we can divide the strings up into words by split the string into array and put each word as own element in the array, then map or filter to check each element
// filter does test for each element 
function findNumber(str){
let arr = str.split(" ");
let arr1 = arr.filter((ele => !isNaN(ele)));
}
// in this case we get the output but still : arr1["98","100"], we need to remove ""
// we use for that map after filter
//  map return an array based on some acting in thr elements of the  first array
let num = arr1.map(function(val) {
    return parseFloat(val);
});
// we can chain 3 steps in one step 

function findNumber1(str){
    let arr = str.split(" ").filter((ele=> ! isNaN(ele))).map((val=>
    parseFloat(val)))
}