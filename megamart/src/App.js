import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/productPage";
import NavBar from "./component/NavBar";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Contact from "./page/Contact";
import SideBar from "./component/SideBar";
import Footer from "./component/Footer";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
          <main className=" mt-4">
          <div className="row">
            <div className="col-md-3" >
              <SideBar />
            </div>
            
            <div className="app-content col-md-9" >
            <Routes >
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </div>
          </div>
          </main>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
