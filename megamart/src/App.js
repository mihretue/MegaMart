import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/productPage";
import NavBar from "./component/NavBar";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import Contact from "./page/Contact";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </main>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
