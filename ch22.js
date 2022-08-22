// قراءة سلسلة و تبديل كل حرف بالحرف الذي يليه بالترتيب الهجائي
function letterChange (str){
    return str.replace(/[a-zA-Z]g/,function(x){
        return String.fromCharCode(x.charCodeAt(0)+1);

    });


// from intro to javascript: replacing the letter in a string with next letter in alphabet 
}