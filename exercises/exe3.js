// SocksLaundering
// From drawers containing both clean and dirty socks, choose socks to launder in order to obtain the maximum number of clean pairs of socks.
// نود من كومة جوارب أن أحصل على ازواج الجوارب 
// return pairs of socks 
//لدينا تابع بمصفوفة وعدد الجوارب  و يجب بداية أن أفحص هل  طول المصفوفة يساوي عدد الجوارب أم لا 
function socks (arr,n){
    if (!arr || arr.length !== n) return 0;
    let numOfPairs= 0;
    let sockTypeCount = new Map();// هون في الجوارب و الوانها 
// المرور عللى كل جورب 
//Iterate through socks or through the array arr
//الهدف هو ربط الجوارب ذات الالوان المتطابفة 
// 

for (i=0; i<n; i++){
    let sock = arr[i];

    if(!sockTypeCount.has(sock)){
        sockTypeCount.set(sock,1);
    }
    else
    {
        const acc = sockTypeCount.get(sock) +1;
        sockTypeCount.set(sock, acc);
    }
//لحد الاان جمعنا الجوارب كلها داخل ماب و كل جرابه و عدد الالوان منها ,, التايب 
for(let type of sockTypeCount.keys()) {
    const pairs = sockTypeCount.get(type) ;//يحضر كل تايب وقديش في منه عدد جوارب
    numOfPairs += Math.floor(pairs%2);
}
//https://www.youtube.com/watch?v=Za0o32yQbKI

}





    
    
    
    return numOfPairs;
}