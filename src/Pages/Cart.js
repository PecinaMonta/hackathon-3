function Cart() {
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
        <div className="col">
          <h1>Cart</h1>
        </div>
      </div>
      <div className="tabs">
        <ul className="nav nav-tabs">
          <li class="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/cart/products"
            >
              Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart/address">
              Adress
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart/summary">
              Summary
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cart;
