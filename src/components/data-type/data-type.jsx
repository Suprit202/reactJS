import { useEffect, useState } from "react";
import moment from "moment";

export function DataType() {
  const [stock] = useState(true);
  const [price] = useState();
  const [amount] = useState();
  const [cities] = useState(['Delhi','Hyderabad','Bhubaneswar']);
  const [product] = useState({Name:'Samsung TV', Price: 45000, ShippedTo:['Delhi', 'Hyd'], Rating:{Rate:4.2, Count:600}});
  const [items] = useState([
    {Name:'Oppo',price:'4500'},
    {Name:'Vivo',price:'6000'},
    {Name:'Realme',price:'8000'},
  ]);
  const [depature] = useState(Date());
  const [mobile,setMobile] = useState('');
  
  useEffect(()=>{
    setMobile('+916370568086')
  },[])

  return(
    <div className="container-fluid">
      <dt>Product Availability</dt>
      <dd>{(stock===true?'true':'false')}</dd>
      <dt>price</dt>
      <dd>{((price)?price:'price not defined')}</dd>
      <dt>Amount</dt>
      <dd>{((amount === null)? 'Not Defined':amount)}</dd>
      <dt>City</dt>
      <dd>
        <ol>
          {
            cities.map((city,i) => 
              <li key={i}>{city}</li>
            )
          }
        </ol>
      </dd>
      <dt>Product</dt>
      <dd>{product.Rating.Rate}<span className="bi bi-star-fill text-success">[{product.Rating.Count}]</span></dd>
      <dt>Item</dt>
      <dd>
        <div>
          <h2>Product Table</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                items.map((item,i) => <tr key={i}>
                  <td>{item.Name}</td>
                  <td>{item.price}</td>
                  <td>
                    <button className="btn btn-warning bi bi-pen-fill"></button>
                    <button className="ms-2 btn btn-danger bi bi-trash"></button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </dd>
      <dt>Date</dt>
      <dd>Depature time is: {moment(depature).format('MMMM Do YYYY, h:mm:ss a')}</dd>
      <dt>Mobile No.</dt>
      <dd>Mobile number is: {(mobile.match(/\+91\d{10}/))?'verified':'Invalid'}</dd>
    </div>
  )
}