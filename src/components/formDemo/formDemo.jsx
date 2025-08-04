import { useState } from "react";


export function FormDemo() {

  const[userDetails, setUserDetails] = useState({UserName:null,Mobile:null,City:null})

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Form Submitted`);
    console.log(userDetails);
  }

  function handleNameChange(e) {
    setUserDetails(
      {
        UserName:e.target.value,
        Mobile: userDetails.Mobile,
        City:userDetails.City
      }
    )
  }

  function handleMobileChange(e) {
    setUserDetails(
      {
        UserName:userDetails.UserName,
        Mobile: e.target.value,
        City:userDetails.City
      }
    )
  }

  function handleCityChange(e) {
    setUserDetails(
      {
        UserName: userDetails.UserName,
        Mobile: userDetails.Mobile,
        City: e.target.value
      }
    )
  }

  return (
    <div className="container-fluid">
      <h2>Resister USer</h2>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>User Name</dt>
          <dd><input type="text" name="UserName" onChange={handleNameChange}/></dd>
          <dt>Mobile</dt>
          <dd><input type="text" name="Mobile" onChange={handleMobileChange}/></dd>
          <dt>City</dt>
          <dd>
            <select name="City" onChange={handleCityChange}>
              <option selected>Select City</option>
              <option>Delhi</option>
              <option>Hyderabad</option>
            </select>
          </dd>
        </dl>

        <button type="submit">Register</button>

      </form>
    </div>
  );
}