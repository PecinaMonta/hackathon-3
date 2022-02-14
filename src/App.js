import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from "react-router-dom";
import Categories from "./Pages/Categories";
import ProductX from "./Pages/ProductX";
import ProductN from "./Pages/ProductN";
import ProductZ from "./Pages/ProductZ";

import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Oneproduct from "./Pages/Oneproduct";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/productX" element={<ProductX />} />
        <Route path="/productN" element={<ProductN/>} />
        <Route path="/productZ" element={<ProductZ/>} />
        <Route path="/oneproduct" element={<Oneproduct/>}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
