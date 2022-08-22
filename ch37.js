

// reverse the 2 characters in   string 
function swap(str,a,b)
{
    var c="";
    for(var i=0;i<str.length;i++)
    {
        if(i==a)
         c= c+ str[b];
         else
            if(i==b)
                c=c+str[a];
               else
               c=c+str[i];
             
    }
    return c;
   }