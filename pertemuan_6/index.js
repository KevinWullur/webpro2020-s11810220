/*
    object
*/


// const mahasiswa1 =["john", "Doe", 31,]

//mendeklarasikan object
//1. object literals
const mhs1 ={
    namaDepan : 'john',
    namaBelakang :'Doe',
    umur : 31,
    sudahLulus : true,
    alamat : {
        jalan :"Jln. Arnold Mononutu",
        kecamatan : "Airmadidi",
        kabupaten : "Minahasa Utara",
    },
    IPsemester : [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function () {
        let total = 0;
        this.IPsemester.foreEach(function(el){
            total = total + el;
        });
        this.IPkumulatif = total / 4;
    },
};
//delete mhs1.namaBelakang;
//console.log

//2. kata kunci new
// const mhs2 = new object();
//mhs2.namaDepan = "Jane";
//mhs2.namaBelakang = "smith";

//mengakses properti object
//1. Dot notation
//console.log(mhs1.umur);
//2. bracket notation
//console.log(mhs2["namaBelakang"]);

//console.log(mhs1.alamat.jalan);
//console.log(mhs1.IPsemester[2]);

const mahasiswa = [
    {
        nim: '001',
        namaDepan: "john",
        namaBelakang: "Doe",
    },
    {
        nim: '002',
        namaDepan: "Yane",
        namaBelakang: "Smith",
    },
    {
        nim: '003',
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el){
    console.log(el);
});