import React from 'react';
import {cekTahun, cekHari} from '../utils/waktu';


const Hello = () =>{
    return (
      <>
        <p>Hello, Welcome to Web Programming class</p>
        <p>Tahun sekarang adalah {cekTahun()}</p>
        <p>tanggal sekarang adalah {cekHari()}</p>
      </>
    );
  };

  export default Hello;