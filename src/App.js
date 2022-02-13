import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/Categories";
import Category123 from "./Pages/Category123";
import ProductX from "./Pages/ProductX";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Products from "./Components/Products";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category123" element={<Category123 />} />
        <Route path="/productX" element={<ProductX />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/products" element={<Products />} />
      </Routes>
    </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
