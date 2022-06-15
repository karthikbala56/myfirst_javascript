//single data sepratly delcared

// let student= "karthik";
// let rollenumber=5345;
// let mark=45; 

//multiple data stored by object

let info = {
   studentname:"karthik",
   RollNo:43545,
   id:34,
   mark:77,

}
// console.log(info.RollNo);
let bus={
    name:'kg',
    boardingtime:'7PM',
    dropingtime:'6AM',
    boardingpoint:'chennai',
    endingpoint:'karur',

}
// console.log(bus);
// console.log(bus.name);

// loop condition
// basic loop
// for( let i=10;i>10;i++){
//     console.log(i)
// }

// modern js two types
// for in
// for of

for(let datatypes in bus){
    // console.log(datatypes);
    console.log(bus[datatypes]);
}