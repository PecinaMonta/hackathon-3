import CartTabs from "../Components/CartTabs";

function Cart() {
  return (
    <div className="containerFluid">
      <CartTabs />
      <section className="content-section">
        <div className="cart-row display-flex">
          <div className="col-6">
            <span className="cart-item cart-header cart-column">Item</span>
            <span className="cart-price cart-header cart-column">Qty</span>
            <span className="cart-quantity cart-header cart-column">Price</span>
            <span className="cart-quantity cart-header cart-column">Total</span>
          </div>
          <div className="cart-items">
            <div className="cart-row">
              <img
                className="cart-item-image"
                src="../images/africa.jpg"
                width={180}
                height={100}
                alt="Africa landmark"
              ></img>
              <span className="cart-item-title">Travel - Africa</span>
              <span className="cart-price">€600.00</span>
              <div className="cart-quantity">
                <input
                  className="cart-quantity-input"
                  type="number"
                  value="1"
                ></input>
                <button className="btn btn-danger" type="button">
                  REMOVE
                </button>
              </div>
            </div>
            <div className="cart-row">
              <div className="cart-item cart-col">
                <img
                  className="cart-item-image"
                  src="../images/europe.jpg"
                  width={180}
                  height={100}
                  alt="Europe landmark"
                ></img>
                <span className="cart-item-title">Ceļojums - Europe</span>
              </div>
              <span className="cart-price cart-column">€600.00</span>
              <div className="cart-quantity cart-column">
                <input
                  className="cart-quantity-input"
                  type="number"
                  value="1"
                ></input>
                <button className="btn btn-danger" type="button">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
