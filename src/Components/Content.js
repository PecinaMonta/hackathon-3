import { Route, Routes } from "react-router-dom";
import Categories from "../Pages/Categories";
import Category123 from "../Pages/Category123";
import ProductX from "../Pages/ProductX";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";

function Content() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/features" element={<Categories />}/>
                <Route path="/features" element={<Category123/>}/>
                <Route path="/features" element={<ProductX/>}/>\
                <Route path="/features" element={<Cart/>}/>
            </Routes>
        </div>
    )
}

export default Content;