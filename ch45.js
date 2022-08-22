//JavaScript Problem: Capitalize the First Letter of Multiple Strings

function capitalString(str){


    let arr=[...str].map((ele)=> {
    (ele.slice(1).toUpperCase()===ele.slice(1) ? ele[0].toUpperCase+ele.slice(1).toLowerCase
    : ele[0].toUpperCase+ele.slice(1));
}
)
return arr.join('');
}