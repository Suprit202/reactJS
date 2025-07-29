import './netflix-main.css';

export function NetflixMain() {
  return(
    <>
      <div className='input-group input-group-lg w-50'>
        <input type="email" className='form-control btn btn-outline-light rounded rounded-1' placeholder='Email Address' />
        <button type="button" className='btn btn-danger ms-2 rounded rounded-1 fs-6 fw-bold'>Get Started <span className='bi bi-chevron-right'></span></button>
      </div>
    </>
  );
}