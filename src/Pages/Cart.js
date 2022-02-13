import CartTabs from "../Components/CartTabs";

function Cart() {
  return (
    <div className="containerFluid">
      <CartTabs />
      <section className="content-section">
        <div className="cart-row display-flex">
          <div className="col-6">
            <span className="cart-item ">Item</span>
            <span className="cart-quantity">Price</span>
            <span className="cart-price ">Qty</span>
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
                <span className="cart-item-title">Travel - Europe</span>
              </div>
              <span className="cart-price">€400.00</span>
              <div className="cart-quantity col-8 col-sm-8">
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
                  src="../images/asia.jpg"
                  width={180}
                  height={100}
                  alt="Asia landmark"
                ></img>
                <span className="cart-item-title">Travel - Asia</span>
              </div>
              <span className="cart-price">€800.00</span>
              <div className="cart-quantity col-8 col-sm-8">
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
        <div class="cart-total">
          <strong class="cart-total-title">Total</strong>
          <span class="cart-total-price">€1800.00</span>
        </div>
        <button class="btn btn-primary btn-purchase" type="button">
          PURCHASE
        </button>
      </section>
    </div>
  );
}

export default Cart;
