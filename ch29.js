
//JavaScript Problem: Removing Duplicate Objects from an Array
const users = [
    {id:22,fName:'Samah',lName:'Alasa'},
    {id:23,fName:'Aous',lName:'Alasa'},
    {id:22,fName:'Obada',lName:'Alasa'},
];
uniqArray =[...users.reduce ((map,obj) => 
map.set(obj.id,obj),new Map()).values()];
//شرح هذا التمرين في الدفتر الصغير