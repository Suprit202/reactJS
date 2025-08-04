import axios from "axios";
import { useState,useRef, useEffect } from "react";

export function CarouselDemo() {
  const [product, setProduct] = useState({id:0 ,title:null ,price:0, description:null, image:null, category:null, rating:{rate:0,count:0}})
  const [status, setStatus] = useState(null);

  let productId = useRef(1);

  let thread = useRef(null);

  function loadProductManually(id) {
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data));
  }

  function loadProductAutomatically() {
    productId.current = productId.current + 1;
    axios.get(`https://fakestoreapi.com/products/${productId.current}`)
    .then(res => setProduct(res.data));
  }

  function handelSeekbarChange(e) {
    productId.current = e.target.value;
    loadProductManually(productId.current);
  }

  function handelNextClick() {
    productId.current = productId.current + 1;
    loadProductManually(productId.current);
  }

  function handelPreviousClick() {
    productId.current = productId.current - 1;
    loadProductManually(productId.current);
  }

  function handelPlayClick() {
    thread.current = setInterval(loadProductAutomatically,3000);
    setStatus("Slide Show - Auto");
  }

  function handelPushClick() {
    clearInterval(thread.current);
    setStatus("Slide Show - Pushed")
  }

  useEffect(() => {
    loadProductManually(1);
  },[])

  return(
      <div className="container-fluid d-flex justify-content-center">

            <div className="card w-50 p-2 mt-4">

                <div className="card-header text-center">

                    <div>{product.title}</div>

                </div>

                <div className="card-body">

                    <div className="row">

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handelPreviousClick} className="btn btn-dark bi bi-chevron-left"></button>

                        </div>

                        <div className="col-10">

                            <img src={product.image} width="100%" height="400" />

                            <div className="mt-2">

                                <input type="range" onChange={handelSeekbarChange} min="1" max="20" value={productId.current} className="form-range" />

                            </div>

                        </div>

                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">

                            <button onClick={handelNextClick} className="btn btn-dark bi bi-chevron-right"></button>

                        </div>

                    </div>

                </div>

                <div className="card-footer text-center">

                    <button className="btn btn-success bi bi-play" onClick={handelPlayClick}></button>

                    <button className="btn btn-danger mx-2 bi bi-pause" onClick={handelPushClick}></button>

                </div>

            </div>

        </div>
  );
}