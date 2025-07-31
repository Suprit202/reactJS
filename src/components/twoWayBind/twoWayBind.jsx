import { useState,useEffect } from "react";

export function TwoWayBind() {

  const [user,setUser] = useState('John');
  const [msg,setMsg] = useState(null);

  function handleNameChange(e) {
    setUser(e.target.value);
  }

  function varifyName(e) {
    if (e.target.value === 'David' ) {
      setMsg('Name Taken -- try other name');
    }
    else{
      setMsg('Name available');
    }
  }

  function handelBlur() {
    setMsg('');
  }

  return(
    <div className="container-fluid">
      <dl>
        <dt>User Name</dt>
        <dd><input type="text" onBlur={handelBlur} onKeyUp={varifyName} onChange={handleNameChange} value={user}/></dd>
        <dd>{msg}</dd>
      </dl>
      <h2>Hello! {user}</h2>
    </div>
  );
}