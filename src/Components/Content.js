import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Category123 from "../Pages/Category123";
import ProductX from "../Pages/ProductX";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Products from "./Products";
import Address from "./Address";
import Summary from "./Summary";
import CategoryLanding from "./CategoryLanding";


function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category123" element={<Category123 />} />
        <Route path="/categorylanding" element={<CategoryLanding />} />
        <Route path="/productX" element={<ProductX />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/products" element={<Products />} />
        <Route path="/cart/address" element={<Address />} />
        <Route path="/cart/summary" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default Content;
