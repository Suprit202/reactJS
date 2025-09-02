import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { VideoTutorialHome } from "./videoTutorialHome";
import { AdminLogin } from "./adminLogin";
import { UserLogin } from "./userLogin";
import { AdminDashboard } from "./adminDashbord";
import './videoTutorialIndex.css';

export function VideoTutorialIndex() {
  return(
    <div className="container-fluid bg-image">
      <BrowserRouter>
        <header className="text-white d-flex justify-content-between align-items-center">
          <div className="fs-1 fw-bold">Video Tutorial</div>
          <Link to='/' className="btn btn-secondary bi bi-house-door"></Link>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<VideoTutorialHome/>}/>
            <Route path="admin-login" element={<AdminLogin/>}/>
            <Route path="user-login" element={<UserLogin/>}/>
            <Route path="admin-dashboard" element={<AdminDashboard/>}/>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}