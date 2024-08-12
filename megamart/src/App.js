import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/productPage";
import NavBar from "./component/NavBar";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Contact from "./page/Contact";
import SideBar from "./component/SideBar";
import Footer from "./component/Footer";
import './App.css'
import Admin from './component/Admin'
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
              <Route path="/admin" element={<Admin/>} />
            </Routes>
            </div>
          </div>
          </main>
          <div className="position-relative">
            <Footer className='position-absolute bottom-0' />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
