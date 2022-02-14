import { Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../Context/Context";
import './products.css';

function ProductN() {

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
      <span id="lastSubsequenceColor">Asia</span>
    </p>
        <Row>
            <h2> Travels in Asia</h2>
        </Row>
        <Row>
            <Col>
            <Image fluid rounded src="/images/asia.jpg"/>
            
            </Col>
            <Col>
            <CategoryList title="ASIA" description="Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe, and the continental landmass of Afro-Eurasia with Africa and Europe. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.5 billion people (as of June 2019) constitute roughly 60% of the world's population."/>
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

export default ProductN;