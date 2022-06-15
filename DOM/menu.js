// import './style.css';
"use strict";
const bill = [
    {id:1,name:"pizza",price: 400},
    {id:2,name:"dhosa",price: 600},
    {id:3,name:"burger",price: 300},
    {id:4,name:"savarma",price: 200},
];
console.log(bill)


  let detail =document.getElementById("hotel_bill") 
   bill.forEach(item => {
    detail.innerHTML +=`
    <li>
    ${item.id} ${item.name} ${item.price}
    </li>
    `;
    
});