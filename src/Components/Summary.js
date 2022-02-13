import AddressOutput from "./AddressOutput";
import CartTabs from "./CartTabs";

function Summary() {
  return (
    <div className="containerFluid">
      <CartTabs />
      <h1 className="summaryTab">This is a summary tab</h1>
      <AddressOutput />
    </div>
  );
}

export default Summary;
