import { useContext, createContext, useState } from "react";

let context = createContext(null);

export function Level1() {
  let parContext = useContext(context);
  return(
    <div>
      <div className="bg-warning text-danger p-4 m-4">
        <h4>level-1 : {parContext}</h4>
        <Level2/>
      </div>
    </div>
  )
}

export function Level2() {
  let parContext = useContext(context);
  return(
    <div className="bg-danger text-white p-4 m-4">
      <h2>level-2 : {parContext}</h2>
    </div>
  )
}

export function ContextDemo() {
  const[msg, setMsg] = useState('Welcome');

  function handelClick(e) {
    setMsg(e.target.value);
  }

  return(
    <div className="container-fluid bg-dark text-white p-4 mt-3">
      <div>
        <input type="text" onChange={handelClick} placeholder="User Name"/>
      </div>
      <h2>Parent Component : {msg}</h2>
      <context.Provider value={msg}>
        <Level1/>
      </context.Provider>
    </div>
  )
}