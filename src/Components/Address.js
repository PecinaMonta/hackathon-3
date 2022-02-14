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

    <div className="container fluid">
      <CartTabs />
      <div className="row mt-1">
        <div className="col mt-4 mb-4">
          <h3>Shipping address:</h3>
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
        <div className="col mt-4 mb-4">
          <h3>Billing address:</h3>
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
      <br />
      <button
        type="button"
        onClick={updateAddressShip}
        className="btn btn-outline-success"
      >
        Submit
      </button>

    </div></div>

      <div className="row mt-2 mb-2">
        <img
          className="col col-sm-4 mt-2 mb-2"
          src="../images/worldIsJustCat.jpeg"
          width={380}
          height={400}
          alt="World map with cat shape"
        ></img>
      </div>
    </div>

  );
}

export default Address;
