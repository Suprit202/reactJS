import { useEffect, useState } from "react";

export function DataBinding() {
  const [price, setPrice] = useState(0);
  const [views] = useState(5600009);

    useEffect(()=>{
        setPrice(405000);
    },[]);

  return(
    <div className="container-fluid">
      <h2 className="text-center text-warning p-3">Data Binding</h2>
      <dl>
        <dt>Price</dt>
        <dd>{price.toLocaleString('en-in',{style:'currency',currency:'INR'})}</dd>
        <dt>View</dt>
        <dd>{views.toLocaleString('en-us',{notation:'compact'})}</dd>
      </dl>
    </div>
  );
}