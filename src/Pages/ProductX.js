import { Container, Row, Col} from "react-bootstrap";
import SingleProduct from "../Components/SingleProduct";
import { CartState } from "../Context/Context";
import './products.css';

function ProductX() {

const {state: { products }} = CartState();
console.log({products});

    return (
        <Container>
        <Row>
            <h2> Category of travels in Europe</h2>
        </Row>
        <Row>
            <Col>Category Picture</Col>
            <Col>Category Description</Col>
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