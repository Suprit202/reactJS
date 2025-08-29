import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingDetails } from "./shopping-details";
import { ShoppingProducts } from "./shopping-product";
import { ShoppingHome } from "./shopping-home";

export function ShoppingIndex() {
  return(
    <div className="fluid-container">
      <BrowserRouter>
        <header className="text-center">
          <div><h2>Shopper</h2></div>
          <div>
            <Link to="/search">Search Products</Link>
            <span className="mx-3">|</span>
            <Link to="/prime">Prime Members</Link>
            <span className="mx-3">|</span>
            <Link to="/login">Prime Login</Link>
          </div>
        </header>
        <section className="mt-4">
          <Routes>
            <Route path="/" element={<ShoppingHome/>} />
            <Route path="products/:category" element={<ShoppingProducts/>}>
              <Route path="details/:id" element={<ShoppingDetails/>}/>
            </Route>
            <Route path="search" element={<h2>Search Element</h2>}/>
            <Route path="search-results" element={<h2>Search Results</h2>}/>
            <Route path="prime" element={<h2>Prime Member Only</h2>}/>
            <Route path="login" element={<h2>Login</h2>}/>
            <Route path="*" element = {<h1 className="text-danger">404 - Page Not Found</h1>}></Route>
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}