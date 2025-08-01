import { use } from "react";
import { useState } from "react";

export function EmiCalculator() {
  const [amount,setAmount] = useState(100000);
  const [years, setYears] = useState(1);
  const [rate, setRate] = useState(10.45);
  const [emi, setEmi] = useState(0);
  const [toggle,setToggle] = useState('');

  function handelAmountChange(e) {
    setAmount(e.target.value);
  }

  function handelYearChange(e) {
    setYears(e.target.value);
  }

  function handelRateChange(e) {
    setRate(e.target.value);
  }

  function calculateEMI() {
    var P = parseInt(amount);
    var N = parseInt(years)*12;
    var R = parseInt(rate)/12/10;

    var EMI = P * R * (Math.pow(1+R,N)) / (Math.pow(1+R,N)-1);

    setEmi(EMI);

    setToggle('d-block')
  }

  return(
    <div className="container-fluid">
      <div className="p-4 border border-2 mt-4">
        <h4>Personal Loan EMI CAlculator</h4>
        <div className="row my-4">
          <div className="col">
            Amount You Need &#8377; <input onChange={handelAmountChange} type="text"  size='10' value={amount} />
          </div>
          <div className="col">
            For <input onChange={handelRateChange} type="text" size='2' value={years} /> years
          </div>
          <div className="col">
            Interest rate <input onChange={handelYearChange} type="text" size='2' value={rate} /> %
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <input type="range" onChange={handelAmountChange} className="form-range" step="100000" min="100000" max="1000000" value={amount} />
            <div>
              <span>&#8377; 1,00,000</span>
              <span className="float-end">&#8377; 1,00,000</span>
            </div>
          </div>
          <div className="col">
            <input type="range" onChange={handelYearChange} className="form-range" step="1" min="1" max="5" value={years}/>
            <div>
              <span>1 Year</span>
              <span className="float-end">5 Year</span>
            </div>
          </div>
          <div className="col">
            <input type="range" onChange={handelRateChange} className="form-range" step="0.01" min="10.45" max="18.45" value={rate}/>
            <div>
              <span>10.45%</span>
              <span className="float-end">&#8377;18.45%</span>
            </div>
          </div>
        </div>
        <button onClick={calculateEMI} className="btn btn-primary">Calulate EMI</button>
        <div className={`text-center fs-4 ${toggle}`}>
          Your EMI amount <span className="fw-bold">{emi.toLocaleString('en-in',{style:"currency",currency:"INR",maximumFractionDigits:2})}</span>
        </div>
      </div>
    </div>
  );
}