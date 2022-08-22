//Codility - Binary Gap (JavaScript) 

function binaryGap(N){
let code = (N>>>0).toString(2);
let maxGap=0 ;
for(i=0; i<code.length;i++){
    for(j=i+1; j<code.length;j++){
        if(code[i]==1 && code[j]==1){
        maxGap=j-i-1;
    }
i=j;
    }
}
return maxGap;
}