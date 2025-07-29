import { useState, useEffect } from "react";

export function ClassBinding ()
{
  const[dynamicClass] = useState('bg-success');
  const[styleBinding] = useState({textAlign:'center', border:'2px solid black', fontSize:'100px', color:'cyan'})

  return(
    <div className="container-fluid">
      <div className = {`text-light ${dynamicClass}`} >Welcome</div>
      <div style={styleBinding}>React 19</div>
    </div>
  );
}