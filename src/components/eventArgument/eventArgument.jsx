 import { useState, useEffect } from "react";

 export function EventArgument() {

  function handelInserClick(e) {
    console.log(`Button Value:${e.target.value}\nButton Id:${e.target.id}\nX Position:${e.clientX}\nY Positon:${e.clientY}`);
  }

  function insertClick(...product) {
    let [id,name,stock,cities,rating] = product;
    console.log(`ID=${id}\nName=${name}\nStock=${stock}\nCities=${cities}\nRating=${rating.rate}`)
  }

  return(
    <div className="container-fluid">
      <button value="Insert" id="btnInsert" onClick={handelInserClick}>Insert</button>
      <button className="ms-2" onClick={()=>insertClick(1,'TV',true,['Delhi','Hyd'],{rate:4.2,view:250})}>Insert </button>
    </div>
  )
 }