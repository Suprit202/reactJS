import './netflix-section.css'
import { NetflixMain } from './netflix-main.jsx';

export function NetflixSection() {
  return(
    <>
      <div id='section-content' className='d-flex flex-column align-items-center'>
        <div className='py-3'>
          <div className="mainHeader text-white text-center">Unlimited movies, TV shows<br/> and more</div>
          <div className="text-white text-center py-2 h6">Starts at ₹149. Cancel at any time.</div>
          <div className="text-white text-center h7">Ready to watch? Enter your email to create or restart your <br/>membership.</div>
        </div>
        <NetflixMain/>
      </div>
    </>
  );
}