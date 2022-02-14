import { Link } from "react-router-dom";

function CategoryList(props) {
    const title = props.title;
    const description = props.description;
    const image = props.image;
    

    return (
        <div className="card">
              <div class="row g-0">
            <div class="col-md-8"></div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
        </div>
    )
}

export default CategoryList;
