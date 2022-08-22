/*
les 8
EquiLeader
Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.

A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:
0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.
For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

/*
1- find the leader or dominator : n
2-count its total of occurrences : c
3-loop over the array with leader counter on, on this way we have the number of leaders on both sides of the array
4-if [(i+1 < 2*c)] && length A -i -1 <2*(n-c)]
5- Equileader ++
why step 4:

*/
function solution (A){
    let leader =0;
        let acc = [];
    for(i=0; i<A.length;i++){
        if(!acc[A[i]]){
            acc[A[i]]==1;
        }
        acc[A[i]]++ ;
    }
    if(acc[A[i]]>A.length/2)
    return i;

    let c = 0;
    for(i=0;i<acc.length;i++){
        c+=acc[i];

    }
    
for(let j=0; j<A.length;j++){
    if( (j+1 < 2*c) && (A.length -j-1 <2*(n-c))){ //بهذه الطريقة عند كل قيمة أي  يكون لدينا جانب يساري و جانب يميني   
        leader ++;
    }
}

 return leader;   
}



