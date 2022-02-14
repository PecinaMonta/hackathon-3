import { useEffect, useState } from "react";
import { Button, ListGroup, ListGroupItem, Row, Col, Image} from "react-bootstrap";
import { CartState } from "../Context/Context";

import "./productsTab.css";

function Products() {

const { state: { cart}, dispatch,} = CartState();

const [total, setTotal] = useState();  

useEffect(() => {
setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0 ));
}, [cart]);


  return (
    <div className="home">
      <div >
      <ListGroup className="productContainer">
        <ListGroupItem>
          <Row>
            <Col md={2}>Product</Col>
            <Col md={2}></Col>
            <Col md={2}>Price</Col>
            <Col md={2}>Rating</Col>
            <Col md={2}></Col>
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
                <Col md={2}>
                  <Button 
                  type="button" onClick={() => dispatch({
                    type: "REMOVE_FROM_CART",
                    payload:prod,
                  })}>
                    Remove
                  </Button>
                </Col>
              </Row>
              
            </ListGroupItem>
          ))
        }
      </ListGroup>
      <div className="total">
        <h4>Total: {total} euros</h4>
      </div>
      </div>
    </div>
     );
}

export default Products;