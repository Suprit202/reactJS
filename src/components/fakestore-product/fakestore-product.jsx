import axios from "axios"

import { useContext, useEffect, useState } from "react"

import { context } from "../fakestore-index/fakestore-index";



export function FakestoreProducts({ addToCart }) {
  
  const parContext = useContext(context);

  const [products, setProducts] = useState([{ id: 0, title: null, price: 0, category: null, description: null, image: null }]);

  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {

    axios.get(`https://fakestoreapi.com/products`)

      .then(response => {

        setProducts(response.data);
        setFilterProduct(response.data);

      })

  }, [])

  useEffect(() => {
    const lowerSearch = parContext.trim().toLowerCase();
    if (lowerSearch) {
      if (lowerSearch === "all") {
        setFilterProduct(products);
      }
      else {
        setFilterProduct(
          products.filter(product =>
            product.category.toLowerCase().includes(lowerSearch)
          )
        )
      }
    }
    else{
      setFilterProduct(products);
    }
  }, [parContext, products])



  function handleAddClick(product) {

    addToCart(product);

  }





  return (

    <div className="d-flex overflow-auto align-items-baseline flex-wrap" style={{ height: '600px' }}>

      {

        filterProduct.map(product =>

          <div className="card m-2 p-2" key={product.id} style={{ width: '200px' }}>

            <img src={product.image} className="card-img-top" height="120" />

            <div className="card-header overflow-auto" style={{ height: '120px' }}>

              {product.title}

            </div>

            <div className="card-body">

              <dl>

                <dt>Price</dt>

                <dd>{product.price}</dd>

              </dl>

            </div>

            <div className="card-footer">

              <button onClick={() => { handleAddClick(product) }} className="btn btn-warning bi bi-cart4 w-100"> Add to Cart</button>

            </div>

          </div>

        )

      }

    </div>

  )

}