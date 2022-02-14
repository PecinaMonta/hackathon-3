import { Container, Row, Col, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryList from "../Components/CategoryList";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../Context/Context";
import './products.css';

function ProductZ() {

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
      <span id="lastSubsequenceColor">Africa</span>
    </p>
        <Row>
            <h2> Travels in Africa</h2>
        </Row>
        <Row>
            <Col>
            <Image fluid rounded src="/images/africa.jpg"/>
            
            </Col>
            <Col>
            <CategoryList title="AFRICA" description="Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita, in part due to geographic impediments, legacies of European colonization in Africa and the Cold War, predatory/neo-colonialistic activities by Western nations and China, and undemocratic rule and deleterious policies. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context." />
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

export default ProductZ;