import AddressOutput from "./AddressOutput";
import CartTabs from "./CartTabs";

function Summary() {
  return (
    <div className="containerFluid">
      <CartTabs />
      <div className="row">
        <div className="col-4 col-sm-4 mt-2 ">
          <AddressOutput />
        </div>
        <div className="col col-sm-8 mt-2">
          <div className="row text-center mt-2 mb-2">
            <h3 className="col-4 col-sm-4 mt-2">Item</h3>
            <h3 className="col-4 col-sm-4 mt-2 ">Qty</h3>
            <h3 className="col-4 col-sm-4 mt-2 ">Price</h3>
            <div className="row text-center mt-2 mb-4">
              <img
                className="col-4 col-sm-2 mt-2 mb-2"
                src="../images/africa.jpg"
                width={180}
                height={100}
                alt="Africa landmark"
              ></img>
              <span className="col-4 col-sm-2 mt-4">Travel - Africa</span>
              <span className="col-4 col-sm-4 mt-4">1</span>
              <span className="col-4 col-sm-4 mt-4">€600.00</span>
            </div>
            <div className="row text-center mt-2 mb-4">
              <img
                className="col-4 col-sm-2 mt-2 mb-2"
                src="../images/europe.jpg"
                width={180}
                height={100}
                alt="Europe landmark"
              ></img>
              <span className="col-4 col-sm-2 mt-4">Travel - Europe</span>
              <span className="col-4 col-sm-4 mt-4">1</span>
              <span className="col-4 col-sm-4 mt-4">€400.00</span>
            </div>
            <div className="row text-center mt-4 mb-2">
              <img
                className="col-4 col-sm-2 mt-2 mb-2"
                src="../images/asia.jpg"
                width={180}
                height={100}
                alt="Asia landmark"
              ></img>
              <span className="col-4 col-sm-2 mt-4">Travel - Asia</span>
              <span className="col-4 col-sm-4 mt-4">1</span>
              <span className="col-4 col-sm-4 mt-4">€800.00</span>
            </div>
          </div>
          <div className="row text-center mt-2 mb-4">
            <h3 className="cart-total-title col-sm-2 mt-4 strong">Total</h3>
            <h3 className="cart-total-price col-sm-2 mt-4">€1800.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
