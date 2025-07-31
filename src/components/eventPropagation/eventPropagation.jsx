import { useState ,useEffect } from "react";

export function EventPropagation() {

  function NavClick() {
    alert(`Navbar Clicked - Navigation to Home`)
  }

  function SearchClick(e) {
    e.stopPropagation();
    alert(`Search Clicked - Shows search results`)
  }

  function Login(e) {
    e.preventDefault();
    alert(`Click on login button`);
  }

  return(
    <div className="container-fluid">
       <nav onClick={NavClick} className="mt-3 p-2 border border-2 border-dark">
        <h2>Amazon</h2>
        <button onClick={SearchClick} className="bi bi-search btn btn-warning"></button>
       </nav>
       <div>
        <form onSubmit={Login}>
          <h3>User Name</h3>
          <input type="text" name="User" /> <button type="submit">Login</button>
        </form>
       </div>
    </div>
  );
}