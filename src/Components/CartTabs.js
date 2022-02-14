import { Link } from "react-router-dom";
import Summary from "./Summary";
import Address from "./Address";
import Products from "./Products";

function CartTabs() {
  return (
    <div className="container-fluid">
      <p className="subsequence">
        <span>
          <a href="/">Home</a>
          {">"}
        </span>
        <span id="lastSubsequenceColor">Cart</span>
      </p>
      <div className="row">
        <div className="col mt-2">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="tabs">
        <ul className="nav nav-tabs">
          <li class="nav-item">
            <Link className="nav-link active" aria-current="page" to="/products">
             <Products/>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/address"
            >
              <Address/>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/summary"
            >
              <Summary/>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CartTabs;
