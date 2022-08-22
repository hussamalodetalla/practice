// هنا نريد تابع يرجع لنا تابع و هذا التابع الثاني يأحذ القيم الممرة في التابع الاول  ويبحث عن وجود تطابع في الأوبجيكتس المعرفة داخل مصفوفة
//we can do than easily for example :
//  arrCar.find(car =>car.year===2020)
//but here we want return function




function matchProp_version(key,value){
return function (item){
    if(item[key]===value){
        return true;
    }
    return false;
}
}

// in advanced way:
// const matPro_ver = (key,value)=> item=> item[key]===value;
