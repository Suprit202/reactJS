import { useState, useEffect } from "react";
import axios from "axios";

export function Ajax() {
  const [product,setProduct] = useState({title:'', price:0, image:'', rating:{rate:0,ratings:0,reviews:0},offers:[]});

  function GetProduct() {

    //XMLHttpRequest
    // var http = new XMLHttpRequest();
    // http.open('GET','product.json',true);
    // http.send();

    // http.onreadystatechange = function (){
    //   if(http.readyState === 4)
    //   {
    //     setProduct(JSON.parse(http.responseText));
    //   }
    // }

    //Fetch Request
    // fetch('product.json')
    // .then(res => res.json())
    // .then(product => setProduct(product))

    axios.get('product.json')
    .then(res => setProduct(res.data));
  }

  useEffect(()=>{
    GetProduct();
  },[]);

  return(
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-3">
          <img src={product.image} width="100%"/>
        </div>
        <div className="col-9">
          <div className="fs-2">{product.title}</div>
          <div className="my-4 fs-5"><span className="bg-success rounded rounded-2 py-1 px-2 text-white">{product.rating.rate} <span className="bi bi-star-fill"></span></span><span className="fw-bold ms-3 text-body-secondary">{product.rating.ratings} Ratings & {product.rating.reviews} Reviews</span></div>
          <div className="h1">{product.price.toLocaleString('en-in',{style:'currency',currency:'INR',maximumFractionDigits:0})}</div>
          <div className="">
            <ul className="list-unstyled">
              {
                product.offers.map((offer =>
                  <li className="bi bi-tag-fill text-success mt-3" key={offer}><span className="text-secondary">{offer}</span></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}