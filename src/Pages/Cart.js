import Address from "../Components/Address";
import Products from "../Components/Products";
import Summary from "../Components/Summary";


function Cart() {
 return (
    <div>
    <div className="container-fluid">
    <p className="subsequence">
      <span>
        <a href="/">Home</a>
        {">"}
      </span>
      <span id="lastSubsequenceColor">Cart</span>
    </p>
    <div className="row">
      <div className="col">
        <h1>Cart</h1>
      </div>
      </div>
      </div>
    <div>
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Products</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Address</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Summary</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <Products/>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <Address/>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
    <Summary/>
  </div>
</div>
</div>
</div>
  

  );
}

export default Cart;
