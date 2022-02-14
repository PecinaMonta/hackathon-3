import { Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../Context/Context";
import './products.css';

function ProductX() {

const {state: { products }} = CartState();
console.log({products});

    return (
        <Container>
        <p className="subsequence">
      <span>
        <Link to="/">Home</Link>
        {">"}
      </span>
      <span>
        <Link to="/categories">Categories</Link>
        {">"}
      </span>
      <span id="lastSubsequenceColor">Europe</span>
    </p>
        <Row>
            <h2> Travels in Europe</h2>
        </Row>
        <Row>
            <Col>
            <Image fluid rounded src="/images/europe.jpg"/>
            
            </Col>
            <Col>
            <CategoryList title="EUROPE" description="Europe is a continent which is also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of the continental landmass of Eurasia, it shares the continental landmass of Afro-Eurasia with both Asia and Africa. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea and the waterways of the Turkish Straits. Although much of this border is over land, Europe is almost always recognised as its own continent because of its great physical size and the weight of its history and traditions."/>
            </Col>
        </Row>
        <Row>
            <Col className="products">
        <div className="productContainer">
                {products.map((prod) => {
                    return <SingleProduct prod={prod} key={prod.id}/>;
                })}
        </div>
            </Col>
        </Row>
        </Container>
    )
}

export default ProductX;