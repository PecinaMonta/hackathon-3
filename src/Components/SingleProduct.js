import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import { CartState } from '../Context/Context'

const SingleProduct = ({prod}) => {

    const { state: {cart}, dispatch } = CartState();
    
  return (
  <div className='products'>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.image} alt={prod.name}/>
  <Card.Body>
    <Card.Title>{prod.name}</Card.Title>
    <Card.Text>

      <span>{prod.price.split(".")[0]} euro</span></Card.Text>
      <Card.Text>
          <p>User rating: <br/>
      <Image fluid rounded src="/images/star.png" style={{height: 15}}/>
      <span> {prod.ratings}/5</span></p>
    </Card.Text>
    {
        cart.some(p => p.id===prod.id)?(
              <Button onClick={() => {
                  dispatch({type: 'REMOVE_FROM_CART', payload: prod,});
              }} variant='danger'>Remove from cart</Button>  
        ):(
            <Button onClick={() => {
                dispatch({type: 'ADD_TO_CART', 
                payload: prod,});
            }}
            variable="success">Add to Cart</Button>   
        )
    }

    <Button variant="secondary" href='/oneproduct' >View</Button>
  </Card.Body>
</Card></div>)
}

export default SingleProduct