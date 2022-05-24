import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList/ProductList";
import Product from "./pages/Product/Product";

function App() {
  return (
    // <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/this" element={<Product />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
