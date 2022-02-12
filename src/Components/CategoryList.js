import { Link } from "react-router-dom";

function CategoryList(props) {
    const image = props.image;
    const title = props.title;
    const description = props.description;


    return (
        <div className="card">
            <div className="card-body">
                <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                 <img src="/images/mountain1.jpg" className="d-block" width="40" height="32" alt="..."/>
                </Link>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    )
}

export default CategoryList;
