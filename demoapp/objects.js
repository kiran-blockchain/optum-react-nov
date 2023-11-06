var person ={
    name:'kiran',
    age:30,
    gender:"M",
    address:"Hyd",
    salary:2000,
    employeeId:3
};//object

// var name = person.name;
// var age = person.age;
// var gender = person.gender;
//console.log(name);
// Destrucutring
var{ age,name,gender,...xyz} = person;
console.log(age);
console.log(name);
console.log(gender);
console.log(xyz);
