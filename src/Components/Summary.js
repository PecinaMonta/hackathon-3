import AddressOutput from "./AddressOutput";
import { Button, ListGroup, ListGroupItem, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CartState } from "../Context/Context";


function Summary() {

  const { state: { cart}, dispatch} = CartState();

  const [total, setTotal] = useState();  
  
  useEffect(() => {
  setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0 ));
  }, [cart]);

  return (
    <div >
      
      <h1 className="summaryTab">Your order summary</h1>
      <ListGroup className="productContainer">
        <ListGroupItem>
      <AddressOutput/>
      
      </ListGroupItem>
        <ListGroupItem>
          <Row>
            <Col md={2}>Product</Col>
            <Col md={2}></Col>
            <Col md={2}>Price</Col>
            <Col md={2}>Rating</Col>
          </Row>
        </ListGroupItem>
        {
          cart.map (prod => (
            <ListGroupItem key={prod.id}>
              <Row>
                <Col md={2} >
                <Image fluid rounded className="productImage" src={prod.image} alt={prod.name}/>
                </Col>
                <Col md={2}>
                  <span>{prod.name}</span> 
                </Col>
                <Col md={2}>
                  {prod.price} euro
                </Col>
                <Col md={2}>
                  <Image fluid rounded src="/images/star.png" style={{height: 15}}/>
                  {prod.ratings}/5
                </Col>
              </Row>
              
            </ListGroupItem>
          ))
        }
      </ListGroup>
      <div className="total">
        <h4>Total: {total} euros</h4>
        <Button type="button" disabled={cart.length === 0}>Checkout</Button>
      </div>
      </div>
  );
}

export default Summary;
