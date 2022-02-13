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
    <div>
      <h2>Adress:{addressShip}</h2> <br></br>
      <h2>Adress:{addressBill}</h2> <br></br>
    </div>
  );
}
export default AddressOutput;
