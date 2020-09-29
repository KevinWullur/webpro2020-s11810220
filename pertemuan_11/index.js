//Arrow function
//single argument
// const calcAge = (year) => {
//   return 2020 - year;
// } 

//multiple arguments
//const calcAge = (birthYear, currentYear) => {
//  const
    //return currentYear - birthYear;
//};

//No Argument with implicit return value
//const calcAge =  () => 2020 - 1992;
//console.log(calcAge());

//const years = [1990, 1992, 2001, 2005];

//const calcAge5 = years.map(function(el){
//    return 2020 - el
//});

//const calcAge6 = years.map((el)=> 2020 - el);
//console.log(calcAge6);

//default parameter

//const calcAge = (birthYear, currentYear) => currentYear - birthYear;
//console.log(calcAge(1991));

//exercise
//convert to ES6 Syntax

const yearUntilRetirement =(year = 2020, firstName= "Kevin") => {
    let age = 28;
    let retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + "retired in" + retirement + " years");
    } else {
        console.log(firstName + " is already retired.");
    }
}
yearUntilRetirement(2020, Kevin)