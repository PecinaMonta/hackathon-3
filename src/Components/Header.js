import { Badge} from "react-bootstrap";

import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";

function Header() {

const { state: { cart }, } = CartState();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="col-md-1 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="/images/logo.png" className="d-block" height="60px"  alt="..."/>
                    </Link>
                    <Link className="navbar-brand" to="/">Travelers</Link>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item ">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/categories">Categories</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart  
                                <Badge>{cart.length}</Badge></Link>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default Header;
