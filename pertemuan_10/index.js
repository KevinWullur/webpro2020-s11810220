//var,let,const

// let nama = "Kevin"
// let nama = "Wullur"

// console.log(nama);

//scope dalam javascript
//1. Function scope (var)
//2. Block scope

// for (var i=0;i<10;i++)
// {
//     console.log(i);
// }

// function tes(){
//     for (var i=0; i<10; i++)
//     {
//         console.log(i);
//     }
// }
// tes();
// console.log(i);

//console.log(i);

// {
// let i;
// for (i = 0; i<10; i++)
// {
//     console.log(i);
// }
// }
// console.log(i);

//template Literal

const person = {
    firstName: "Kevin",
    lastName: "Wullur",
    age: 19,
};

console.log("Hello nama saya " + person.firstName + " " + person.lastName + "." + " umur saya adalah " + person.age)

console.log(`Hello nama saya ${person.firsName} ${person.lastName}. Umur saya adalah ${person.age}`);