import { useEffect, useState } from "react";

export function EventBinding(){

  const [msg,setMsg] = useState(null);

  function handelInsertClick() {
    setMsg('Inserted Successfully!')
  }

  return(
    <div className="container-fluid">
      <button className="mt-3" onClick={handelInsertClick}>Insert</button>
      <p>{msg}</p>
    </div>
  );
}