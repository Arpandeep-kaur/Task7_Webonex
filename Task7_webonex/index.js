//  Take an array of objects of employees created above and print those employees whose age is less than 50.
const employeeArray=[{
name: "xyz",
email: "xyz@gmail.com",
age:22,
phone_number:123498576,
gender:"Female",
isMarried:false
},
{
    name:"abc",
    email:"abc@gmail.com",
    age:18,
    phone_number:234568749,
    gender:"Male",
    isMarried:false

},
{
    name:"def",
    email:"def@gmail.com",
    age:56,
    phone_number:3656365253,
    gender:"Male",
    isMarried:true
}
]
let result=employeeArray.filter((a)=>{
    return a.age<50;
})
console.log(result)