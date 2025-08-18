import './login.css'
import { useCaptcha } from '../../hooks/useCaptcha'
import { useState } from 'react';
export function Login(){
  const code = useCaptcha();
  const [captcha, setCaptcha] = useState();

  function captchaRefresh() {
    setCaptcha(code);
  }
  
  return(
      <div id='container' className="container-fluid d-flex flex-row justify-content-center">
        <div className="w-25 p-5 bg-light shadow-lg rounded rounded-3">
          <label for='name' className="form-label fw-bold">Email Address</label>
          <input type="text" className="form-control" id="name" placeholder="name@gmail.com"/>
          <label for='password' className="form-label fw-bold">Password</label>
          <input type="password" className="form-control" id="password" />
          <label className='form-label fw-bold'>Verify Code <button className='btn bi bi-arrow-clockwise' onClick={captchaRefresh}></button> </label>
          <div>{code}</div>
          <div>
            <span><button className='btn btn-warning w-100 my-3'>Login</button></span>
            <span><button className='btn btn-link my-3'>Sign In</button></span>
          </div>
        </div>
      </div>
  )
}