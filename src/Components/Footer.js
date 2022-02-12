import { Link } from "react-router-dom";

function Footer() {
    return (
            <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc. Made by Ieva, Arnita, Monta</p>

    <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img src="/images/mountain1.jpg" className="d-block" width="40" height="32" alt="..."/>
    </Link>


    <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Categories</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Cart</Link>
                                
                            </li>
    </ul>
  </footer>
</div>

    )
}

export default Footer;