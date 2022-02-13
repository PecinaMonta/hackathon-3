import { Link } from "react-router-dom";
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
            <Link className="nav-link active" aria-current="page" to="/cart/">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/cart/address"
            >
              Address
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/cart/summary"
            >
              Summary
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default CartTabs;
