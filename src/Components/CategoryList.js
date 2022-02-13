import { Link } from "react-router-dom";

function CategoryList(props) {
    const title = props.title;
    const description = props.description;
    


    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <Link to="/" class="btn btn-secondary btn-sm" role="button" aria-disabled="true">Explore more</Link>
            </div>
        </div>
    )
}

export default CategoryList;
