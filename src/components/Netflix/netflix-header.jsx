import './netflix-header.css';

export function NetflixHeader() {
  return(
    <>
      <header className='d-flex flex-row justify-content-between p-3 mx-5'>
        <div className='h1 text-danger fw-bold shadow-sm'>
          NETFLIX
        </div>
        <div>
          <div class="dropdown drop-lang">
            <button class="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <span className='bi bi-translate'> English</span>
            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Hindi</a></li>
              <li><a class="dropdown-item" href="#">Spanish</a></li>
              <li><a class="dropdown-item" href="#">Italy</a></li>
            </ul>
          </div>
          <button type="button" class="btn btn-danger ms-2">Sign In</button>
        </div>
      </header>
    </>
  )
}