import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function ShoppingHome() {
  const [category, setCategory] = useState([]);

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/categories`)
    .then(res => setCategory(res.data))
  },[])

  return(
    <div>
      <h4>Home</h4>
      <ul className="list-unstyled">
        {
          category.map((item,i) => 
            <li className="bg-dark my-2 p-2 w-25" key={i}><Link className="text-white text-decoration-none" to={`/products/${item}`}>{item.toUpperCase()}</Link></li>
          )
        }
      </ul>
    </div>
  )
}