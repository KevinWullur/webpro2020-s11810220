//destructuring
//-------------------

//memecah item atau property pada array atau object ke dalam variabel yang // berbeda

//1. array

//const colors = ["merah", "kuning", "hijau"];

// let satu = colors[0]
// let dua = colors[1]
// let tiga = colors[2]

//let [satu, dua, tiga] = colors;
//console.log(satu, dua, tiga);

//let [satu, dua] = colors;
//console.log(satu, tiga);

//let [satu, dua, tiga, empat = "biru"] = colors;
//console.log(satu, dua, tiga, empat);

//2. object

//const user = {
    //name : "kevin",
    //gender : "male",
    //age : 33,
//};

// let name = user.name;
// let gender = user.gender;
// let age = user.age;

//let {name, gender, age, born = "manado" } = user
//console.log(name, gender, age, born);

//let {name, age} = user;
//console.log(name, age);

//let {name: nama, age : umur} = user
//console.log(nama,umur);

//const display = ({name, age}) => {
//    console.log('nama saya adalah ${name}.umur saya adalah ${age}');
//};

//display(user);

//3. array object

//const user = [
//    { id: 1, name: "kevin"},
//    { id: 2, name: "fransiskus"},
//    { id: 3, name: "wullur"},

//];

//let [user1, user2, user3] = users;
//console.log(user1, user2, user3);

let [
    {id:iduser1, name: nameUser1},
    {id:iduser2, name: nameUser2},
    {id:iduser3, name: nameUser3}
] = users;
console.log(idUser1, nameUser1);

//4. kombinasi dengan rest operator

const colors = ["merah", "kuning", "hijau", "biru"];
let[satu, ...lainnya] = colors;

console.log(satu);
console.log(lainnya);
