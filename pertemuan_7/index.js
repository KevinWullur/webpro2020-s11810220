//For Loop
//input
//for (let i = 1; i < 5; i++) {
    //console.log(i);
  //}
  /*
  Output:
  1
  2
  3
  4
*/

//For / In Loop
//input
//const buku = {
    //judul: "The Maze Runner",
    //pengarang: "James Dashner",
    //Tebal_buku: "478 halaman"
 //};
 //for (x in buku) {
   //console.log(x, ':', buku[x]);
 //}
 /*
 Output:
 judul : The Maze Runner
 pengarang : James Dashner
 Tebal_buku : 478 halaman
 */
 
 //While Loop
 //input
//let i = 1;
//while (i < 6) {
  //console.log(i);
  //i++;
//}
/*
Output:
1
2
3
4
5
*/

//Do while Loop
//input
//let i = 1;
//do {
  //console.log(i);
  //i++;
//} while (i < 6);

/*
Output:
1
2
3
4
5
*/

//Menggunakan if, else if,else
//input
//let nilai_Kevin = 95;
//if (nilai_Kevin > 90) {
  //console.log("Sangat Baik");
//} else if (nilai_Kevin >= 70 && nilai_Kevin <= 89) {
  //console.log("Baik");
//} else {
  //console.log("Lumayan");
//}
// Output: Sangat Baik

//Menggunakan Case
//input
//let seragamSekolah;
//let hari = "senin";
//switch (hari) {
  //case "senin":
    //seragamSekolah = "kemeja putih bawahan merah";
    //break;
  //case "selasa":
    //seragamSekolah = "kemeja hijau bawahan hitam";
    //break;
  //case "rabu":
    //seragamSekolah = "kemeja putih bawahan putih";
    //break;
  //case "kamis":
    //seragamSekolah = "kemeja batik merah bawahan hitam";
    //break;
  //case "jumat":
    //seragamSekolah = "baju pramuka";
    //break;
  //default:
    //seragamSekolah = "baju bebas";
//}
//console.log(seragamSekolah);
 // Output: kemeja putih bawahan merah

//Menggunakan Switch
//input
let seragamSekolah;
let hari = "senin";
switch (hari) {
  case "senin":
  case "selasa":
  case "rabu":
  case "kamis":
    seragamSekolah = "kemeja putih bawahan merah";
    break;
  case "jumat":
    seragamSekolah = "baju pramuka";
    break;
  default:
    seragamSekolah = "baju bebas";
}
console.log(seragamSekolah);
 // Output: kemeja putih bawahan merah