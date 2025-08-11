import { DataGrid1 } from "./controlled-components/data-grid1";
import { DataCard } from "./controlled-components/data-card";
import { useState } from "react";

export function ControlledDemo1() {

  const [view,setView] = useState(<DataGrid1 caption='User details mention here' fields={['First Name','Last Name','age','Standard']} data={[{firstName:'David', lastName:'Brick', age:'23', std:'9th'}, {firstName:'Reno', lastName:'Leaf', age:'25', std:'10th'}]}></DataGrid1>);

  function GridView() {
    setView(<DataGrid1 caption='User details mention as table here' fields={['First Name','Last Name','age','Standard']} data={[{firstName:'David', lastName:'Brick', age:'23', std:'9th'}, {firstName:'Reno', lastName:'Leaf', age:'25', std:'10th'}]}></DataGrid1>);
  }

  function CardView() {
    setView(<DataCard caption='User details mention as card here' fields={['First Name','Last Name','age','Standard']} data={[{firstName:'David', lastName:'Brick', age:'23', std:'9th'}, {firstName:'Reno', lastName:'Leaf', age:'25', std:'10th'}]}></DataCard>)
  }

  return(
    <div className="container-fluid p-3">
      <button className="btn btn-warning bi bi-pen-fill" onClick={GridView}>Grid View</button>
      <button className="btn btn-danger bi bi-trash mx-2" onClick={CardView}>Card View</button>
      <h2 className="mt-3">User details</h2>
      <div>{view}</div>
    </div>
  );
}