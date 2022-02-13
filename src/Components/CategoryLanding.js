import { Link } from "react-router-dom";

function CategoryLanding() {
    return (
        <div>
            <div className="album py-5 bg-light">
                <div className="container">

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                    <div className="card shadow-sm">
                        <img src="/images/europe.jpg" className="d-block" alt="..."/>
                        
                        <div className="card-body">
                        <p className="card-text">Europe is a continent which is also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to="/categories" className="btn btn-sm btn-outline-secondary" role="button" aria-disabled="true">Explore more</Link>
                            </div>
                            <small className="text-muted">18 countries to fly to</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                    <img src="/images/asia.jpg" className="d-block" alt="..."/>

                        <div className="card-body">
                        <p className="card-text">Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. </p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to="/categories" className="btn btn-sm btn-outline-secondary" role="button" aria-disabled="true">Explore more</Link>
                            </div>
                            <small className="text-muted">9 countries to fly to</small>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card shadow-sm">
                    <img src="/images/africa.jpg" className="d-block" alt="..."/>

                        <div className="card-body">
                        <p className="card-text">Africa is the world's second-largest and second-most populous continent on the earth, after Asia in both cases.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to="/categories" className="btn btn-sm btn-outline-secondary" role="button" aria-disabled="true">Explore more</Link>
                            </div>
                            <small className="text-muted">11 countries to fly to</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryLanding;