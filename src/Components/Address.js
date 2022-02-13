import { useState } from "react";

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
      <div className="row">
        <div className="col">
          <h2>Shipping address:</h2>
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
        <div className="col">
          <h2>Billing address:</h2>
          <div className="input-group input-group-lg">
            <input
              value={addressBill}
              onChange={updateAddressBill}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-lg"
            />
          </div>
        </div>
      <br />
      <button type="button" class="btn btn-outline-success">
        Confirm
      </button>
    </div></div>
  );
}

export default Address;
