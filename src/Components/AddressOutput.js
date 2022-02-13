import { useState } from "react";

function AddressOutput() {
  const [addressShip, setAddress1] = useState("");
  const [addressBill, setAddress2] = useState("");
  const updateAddressShip = (event) => {
    setAddress1(event.target.value);
  };
  const updateAddressBill = (event) => {
    setAddress2(event.target.value);
  };
  return (
    <div className="row-2">
      <div className="row mt-4 mb-4">
        <h3>Adress:{addressShip}</h3>
      </div>
      <div className="row mt-4 mb-4">
        <h3>Adress:{addressBill}</h3>
      </div>
    </div>
  );
}
export default AddressOutput;
