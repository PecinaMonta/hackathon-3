import CartTabs from "../Components/CartTabs";

function Cart() {
  return (
    <div className="containerFluid">
      <CartTabs />
      <section className="col mt-2 mb-2">
        <div className="row text-center mt-2 mb-2">
          <h3 className="CartHeader col-10 col-sm-4 mt-2">Item</h3>

          <h3 className="col-10 col-sm-4 mt-2 ">Price</h3>

          <h3 className="col-10 col-sm-2 mt-2 ">Qty</h3>

          <div className="row text-center mt-2 mb-4">
            <img
              className="col-10 col-sm-2 mt-4"
              src="../images/africa.jpg"
              width={180}
              height={100}
              alt="Africa landmark"
            ></img>
            <span className="col-10 col-sm-2 mt-4">Travel - Africa</span>
            <span className="col-10 col-sm-4 mt-4 ">€600.00</span>
            <div className="col-10 col-sm-2 mt-4 ">
              <input
                className="col-10 col-sm-4 mt-4 "
                type="number"
                value="1"
              ></input>
            </div>
            <div className="col-10 col-sm-2 mt-4">
              <button className="btn btn-danger mt-4" type="button">
                REMOVE
              </button>
            </div>
          </div>
          <div className="row text-center mt-4 mb-4">
            <img
              className="col-10 col-sm-2 mt-4"
              src="../images/europe.jpg"
              width={180}
              height={100}
              alt="Europe landmark"
            ></img>
            <span className="col-10 col-sm-2 mt-4">Travel - Europe</span>
            <span className="col-10 col-sm-4 mt-4">€400.00</span>
            <div className="col-10 col-sm-2 mt-4">
              <input
                className="col-10 col-sm-4 mt-4"
                type="number"
                value="1"
              ></input>
            </div>
            <div className="col-10 col-sm-2 mt-4">
              <button className="btn btn-danger" type="button">
                REMOVE
              </button>
            </div>
          </div>
          <div className="row text-center mt-4 mb-2">
            <img
              className="col-10 col-sm-2 mt-2"
              src="../images/asia.jpg"
              width={180}
              height={100}
              alt="Asia landmark"
            ></img>
            <span className="col-10 col-sm-2 mt-4">Travel - Asia</span>
            <span className="col-10 col-sm-4 mt-4">€800.00</span>
            <div className="col-10 col-sm-2 mt-4">
              <input
                className="col-10 col-sm-4 mt-4"
                type="number"
                value="1"
              ></input>
            </div>
            <div className="col-10 col-sm-2 mt-4">
              <button className="btn btn-danger" type="button">
                REMOVE
              </button>
            </div>
          </div>
        </div>
        <div className="row text-right mt-2 mb-2">
          <strong className="cart-total-title">Total</strong>
          <span className="cart-total-price">€1800.00</span>
        </div>
        <button className="btn btn-outline-success mt-2 mb-2" type="button">
          PURCHASE
        </button>
      </section>
    </div>
  );
}

export default Cart;
