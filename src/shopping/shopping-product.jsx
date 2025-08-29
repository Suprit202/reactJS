import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

export function ShoppingProducts() {
  const [products, setProducts] = useState([{id:0, title:null, price:0, description:null, category:null, image:null, rating:{rate:0, count:0}}]);

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
    .then(res => setProducts(res.data))
  },[])

  function handleHomeClick() {
    navigate('/');
  }

  return(
    <div className="row">
      <div className="col-8">
        <h1>{params.category.toUpperCase()}</h1>
        <ol>
          {
            products.map(product => (
              <li key={product.id}><Link to={`details/${product.id}`}>{product.title}</Link></li>
            ))
          }
        </ol>
        <Link to="/">Back To Home</Link>
        <button onClick={handleHomeClick} className="btn mx-2 btn-primary bi bi-house-door">Home</button>
      </div>
      <div className="col-4">
        <Outlet/>
      </div>
    </div>
  )
}