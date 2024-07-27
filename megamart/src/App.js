import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./page/productPage";
import NavBar from "./component/NavBar";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <main className="container mt-4">
        <Routes>
          <Route path="/" element={<ProductPage/>} />
        </Routes>
        </main>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
