import React from 'react';
import { Button, Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Lightbox from '../Components/Lightbox';
import '../Components/lightbox.css';


const Oneproduct = () => {

  return (
    <Container>
      <Row>
        <Col>
        <p className="subsequence">
      <span>
        <Link to="/">Home</Link>
        {">"}
      </span>
      <span>
        <Link to="/categories">Categories</Link>
        {">"}
      </span>
      <span>
        <Link to="/productX">Europe</Link>
        {">"}
      </span>
      <span id="lastSubsequenceColor">Benelux</span>
    </p>
        </Col>
      </Row>
      <Row>
        <Col>
      <h2>Most beautiful places in Benelux countries</h2>
      </Col>
      </Row>
      <Row><Col>
      <Lightbox/>
      </Col> </Row><Row><Col>
      <p>Human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken! kitten is playing with dead mouse do doodoo in the litter-box, clickityclack on the piano, be frumpygrumpy. Kitty kitty pussy cat doll get scared by doggo also cucumerro spend six hours per day washing, but still have a crusty butthole have my breakfast spaghetti yarn. Meow leave buried treasure in the sandbox for the toddlers so scratch at the door then walk away ignore the squirrels, you'll never catch them anyway sit on human they not getting up ever so step on your keyboard while you're gaming and then turn in a circle . Meow in empty rooms chase laser and i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk be superior. Run up and down stairs lay on arms while you're using the keyboard, catch eat throw up catch eat throw up bad birds plop down in the middle where everybody walks pee in human's bed until he cleans the litter box inspect anything brought into the house, and hide from vacuum cleaner. Throwup on your pillow pee in human's bed until he cleans the litter box jump up to edge of bath, fall in then scramble in a mad panic to get out but demand to be let outside at once, and expect owner to wait for me as i think about it cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers yet car rides are evil but cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip . Cough while happily ignoring when being called or i can haz for ignore the squirrels, you'll never catch them anyway. Under the bed vommit food and eat it again or woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now yet annoy the old grumpy cat, start a fight and then retreat to wash when i lose. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now.
</p>
      </Col>
      <Col md={5} >
      <Card style={{ width: '30rem'}}>
  <Card.Header><h3>Travel pack info</h3></Card.Header>
  <ListGroup variant="flush">
    <ListGroupItem><b>Dates: </b>03.05. - 15.05.</ListGroupItem>
    <ListGroupItem>
      <b>Tour type:</b> All included
    </ListGroupItem>
    <ListGroupItem>Stay in 5 and 4 star hotels</ListGroupItem>
    <ListGroupItem><b>Countries: </b>
        <ul>
          <li>Luxembourg</li>
          <li>Belgium</li>
          <li>Netherlands</li>
        </ul>
    </ListGroupItem>
    <ListGroupItem>
      <b>Transportation:</b> plane and tourist bus
    </ListGroupItem>
    <ListGroupItem>
      <b>Guide: </b> Aija Milze and local guides
    </ListGroupItem>
    <ListGroupItem>
      <b>Group size:</b> 25 people
    </ListGroupItem>
    <ListGroupItem>
      <b>More information:</b>
      <ul>
        <li>
          e-mail: travels@travels.com
        </li>
        <li>
          tel: +000 278463839
        </li>
      </ul>
    </ListGroupItem>
    <ListGroupItem>
      <h5>Price: 3500 euro</h5>
    </ListGroupItem>
  </ListGroup>
</Card>
<div className='middle'><Button>Book now</Button></div>

      </Col></Row>
      
   </Container>
  )
}

export default Oneproduct;