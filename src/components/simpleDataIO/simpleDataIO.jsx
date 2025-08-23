import { useState } from "react";
import { useTitleCase } from "../../hooks/useTitleCase";

export function SimpleDataIO() {
  const[result, setResult] = useState("this is a boy");
  
  function handelClick() {
    const ans = useTitleCase(result);
    setResult(ans);
  }

  return(
    <div>
      <div>{result}</div>
      <button onClick={handelClick} className="btn btn-primary mx-2 my-2">Click</button>
    </div>
  );
}