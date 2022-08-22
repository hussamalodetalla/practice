//يقرا كل حرف في السلسلة اذا حرف كبير يحوله لصغير و اذا صغير يحوله لكبير
function readCh(str){
    n=str.length;
    str="";
    for(i=0 ; i<n ; i++)
    {
        x=str.charAt(i);
        if(x>="A"&& x<="Z")
           x=x.toLowerCase();
        else
           x=x.toUpperCase();
           str+=x;
    }
    return str;
}