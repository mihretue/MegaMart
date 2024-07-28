import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/productPage";
import NavBar from "./component/NavBar";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Contact from "./page/Contact";
import SideBar from "./component/SideBar";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
          <main className="container mt-4">
          <div className="app-layout">
            <SideBar/>
            <Routes className='app-content'>
              <Route path="/" element={<HomePage />} />
              <Route path="/product" element={<ProductPage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </div>
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
