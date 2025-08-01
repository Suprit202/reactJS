import { useState, useEffect } from "react";
import axios from "axios";

export function KeyBoardEvent() {
  const [users,setUsers] = useState([{user_id:null}]);
  const [msg, setMsg] = useState('');
  const [validationClass,setValidationClass] = useState(null);

  useEffect(()=>{
    axios.get('user.json')
    .then(res => setUsers(res.data))
  },[]);

  function varifyUser(e) {
    for (var user of  users) {
      if(user.user_id === e.target.value){
        setMsg('User Id is already taken!');
        setValidationClass("text-danger");
        break;
      }
      else{
        setMsg('User Id is Valid!');
        setValidationClass("text-success");
      }
    }
  }

  return (
    <div className="container-fluid">
      <dl>
        <dt>User Id</dt>
        <dd><input type="text" onKeyUp={varifyUser} placeholder="Enter user_id"/></dd>
        <dd className={validationClass}>{msg}</dd>
      </dl>
    </div>
  );
}