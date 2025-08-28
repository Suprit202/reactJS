import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function ReactRout() {
  return(
    <div className="container-fluid">
      <h2>Tutorial - Web Technology </h2>
      <BrowserRouter>
        <Routes>
          <Route path="html" element = {<div><h3>HTML</h3><p>It's a markup language</p></div>}></Route>
          <Route path="css" element = {<div><h3>CSS</h3><p>It's a html style</p></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}