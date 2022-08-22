//the goal is find starting position of the slice whose average is minimum 
// https://www.youtube.com/watch?v=rHH1AZWVCXE&list=PLqDHFR_FjG5-rH6Bg5xYMR-HTmSOqyF-L&index=17

function solution (arr){
    let minAvg = Number.MAX_VALUE;
    let minAvgPos = 0;
    let sum = 0;
    let curAvg=Number.MAX_VALUE;
    for(i=0;i<arr.length;i++){
        sum =arr[i];
        for(b=i+1;b<=arr.length;b++){
          sum +=arr[b];

curAvg=sum/(b-i+1);
if(minAvg>curAvg){
    minAvg=curAvg;
    minAvgPos=i;
}
        }
    }
return minAvgPos;
}