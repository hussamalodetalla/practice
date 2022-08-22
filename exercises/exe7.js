

//. MaxNonoverlappingSegments
//  لدينا مصفوفتين الاولى و الثانية و نريد ايجاد خطوط عدم التداخل في هعاتين المصفوفتين, يجب ان تكون النهاية دايما بداية الخد الثاني أكبر من نهاية الاول 
// the second array starts with  B[0], for loop starts with 1 
// Located on a line are N segments, numbered from 0 to N − 1, whose positions are given in arrays A and B. For each I (0 ≤ I < N) the position of segment I is from A[I] to B[I] (inclusive). The segments are sorted by their ends, which means that B[K] ≤ B[K + 1] for K such that 0 ≤ K < N − 1.

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 2) {
        return A.length;
    }
    let count = 1;
    let last = B[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] > last) {
            count++;
            last = B[i];
        }
    }
    return count;
}