import { useState } from "react";
import CartTabs from "./CartTabs";

function Address() {
  const [addressShip, setAddress1] = useState("");
  const [addressBill, setAddress2] = useState("");
  const updateAddressShip = (event) => {
    setAddress1(event.target.value);
  };
  const updateAddressBill = (event) => {
    setAddress2(event.target.value);
  };

  return (
    <div className="containerFluid">
      <CartTabs />
      <div className="row mt-1">
        <div className="col mb-4">
          <h2>Shipping address:</h2>
          <div className="row mt-1">
            <div className="input-group input-group-lg">
              <input
                value={addressShip}
                onChange={updateAddressShip}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
          </div>
        </div>
        <div className="col mt-6 mb-4">
          <h2>Billing address:</h2>
          <div className="row mt-1">
            <div className="input-group input-group-lg">
              <input
                value={addressBill}
                onChange={updateAddressBill}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
                id="addressInput"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <button
        type="button"
        onClick={updateAddressShip}
        className="btn btn-outline-success"
      >
        Submit
      </button>
    </div>
  );
}

export default Address;
