// rest & Spread operator
//-------------------------

//const hitung = (a,b,c,d,e) =>{
    //const angka = [a,b,c,d,e];
    //let total  = 0;
    //for(let i=0; i<5; i++){
        //total = total + angka[i]
    //}
    //return total;
//}

//const hitung = (parameter1,parameter2,parameter3) => {
    //console.log(parameter1);
    //console.log(parameter2);
    //console.log(parameter3);

    //let total = 0;
    //angka.forEach((el) => {
        //total = total + el
    //});
    //return total;
//};

//console.log(hitung(1,2,3,4,5));

// Spead Operator
//duplikasi array
//const angka = [1,2,3,4,5];
//const angka2 = angka;

//angka[0]= 10;
//console.log(angka2);

//console.log(angka);
//console.log(...angka);

//menggabungkan array

const angka1 = [1,2,3,4,5];
const angka2 = [6,7,8,9,10];
const angka3 = [12,13];

const gabung5 = angka1.concat(angka2, angka3);
console.log(gabung5);

const gabung6 = [...angka1,...angka2,11,...angka3];
