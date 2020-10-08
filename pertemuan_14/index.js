//Destrukturisasi 

//Contoh Desktrkturisasi Array ES6
// let[firstName, , lastName, , Hobby] = ["Kevin","f","wullur","Design","gaming"]
// console.log(firstName);
// console.log(lastName);
// console.log(Hobby);

// Cara menukar 2 variable atau lebih
// --------- Cara Lama --------------
// let a = 10;
// let b = 15;

// variabel tambahan sementara
// let temp = a;
// a = b; // nilai a sekarang adalah 15
// b = temp; // nilai b sekarang adalah 10

// ------------ Cara Baru ------------
// let a = 10;
// let b = 15

// [a,b] = [b,a];
// nilai a sekarang adalah 15, dan nilai b adalah 10

// Destrukturisasi Objek
// -------- Cara Lama --------------
// let orang = {
//   nama: "henri",
//   umur: 25,
//   sudahMenikah: false
// };

// let nama = orang.nama;
// let umur = orang.umur;
// let sudahMenikah = orang.sudahMenikah;

// console.log(nama); // Output: henri
// console.log(umur); // Output: 24
// console.log(sudahMenikah); // Output: false

//--------- Cara Baru ---------
// let orang = {
//   nama: "henri",
//   umur: 25,
//   sudahMenikah: false
// };

// Destrukturisasi Objek
// let { nama, umur, statusMenikah } = orang;

// console.log(nama); // Output: henri
// console.log(umur); // Output: 25
// console.log(statusMenikah); // Output: undefined karena nama variabel dan properti berbeda

//Jika nama variablenya berbeda dengan nama properti :
// let {
//   namaProperti1: namaVariabelBaru1,
//   namaProperti2: namaVariabelBaru2
// } = namaObjek;

//CONTOH
// let orang = {
//   name: "henri",
//   age: 25,
// };

// buat variabel nama berisi nilai dari properti name pada orang
// buat variabel age berisi nilai dari properti umur pada orang
// let { name: nama, age: umur } = orang;

// console.log(nama); // Output: henri
// console.log(umur); // Output: 25

// DESKTRUKTURISASI OBJEK BERTINGKAT
// Contohnya seperti ini:
let murid = {
    kelas: "12a",
    nama: ["angga", "putra", "veron"],
    prestasi: {
      olahraga: "rank 1",
      akademik: "rank 2"
    }
  };
  
  let {
    prestasi: { olahraga }
  } = murid;
  
  console.log(olahraga); // Output: rank 1