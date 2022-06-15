//filter with condition

//  let age =[3,7,2,4,8,64,5,9]
 
//  let mylist = age.filter( (agetype) =>{  //call back function 
//                                           // It means call the new another fuction inside 
//                                           //the the function 
//     return agetype > 64
     
//  });

//  console.log( "thefilterd data", mylist)

// filter the array Objects
 
// data =[
//     {name:"kumar",salary:1200,qualfi:"react"},
//     {name:"karthik",salary:1200,qualfi:"javascript"},
//     {name:"perumal",salary:1200,qualfi:"vue"},
//     {name:"mani",salary:1200,qualfi:"angular"},
//     {name:"kumar",salary:1200,qualfi:"mongadb"},
    
// ]

// let developers =data.filter(dev =>{     // this filter show the all similar condition objects
    

//     return (dev.qualfi=="javascript" || dev.name=="kumar")
// } );
// console.log(developers);

// find function in array
data =[
    {name:"kumar",salary:1200,qualfi:"react"},
    {name:"karthik",salary:2000,qualfi:"goodboy"},// this find function check the \
    // condition but give the first similar object olny
    {name:"dinesh",salary:1400,qualfi:"saraku"},
    {name:"prakash",salary:1500,qualfi:"mapla"},
    {name:"satha",salary:1100,qualfi:"kudikaren"},
    {name:"prabhu",salary:1200,qualfi:"finance"},
    
]

let developers =data.find(dev =>{
    

    return (dev.name=="satha" )
} );
console.log(developers);