export function Form (){
  return (
    <>
      <div className="w-25 bg-light p-4">
          <h2>Register New User</h2>
          <dl>
              <dt>User Id</dt>
              <dd><input type="text" id="user_id" className="form-control"/></dd>
              <dt>User Name</dt>
              <dd><input type="text" id="user_name" className="form-control"/></dd>
              <dt>Password</dt>
              <dd><input type="password" id="password" className="form-control"/></dd>
              <dt>Mobile</dt>
              <dd><input type="text" id="mobile" className="form-control"/></dd>
          </dl>
          <button className="btn btn-primary w-100" id="btnRegister">Register</button>
          <div>
              <button id="btnSignIn" className="btn btn-link">Existing User</button>
          </div>
      </div>
    </>
  );
}