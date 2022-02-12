import { Link } from "react-router-dom";

function Category123() {
    return (
        <div className="col">
            <div className="container px-4 py-5" id="featured-3">
    <h2 className="pb-2 border-bottom">Columns with icons</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <Link className="nav-link" to="/">Categories</Link>
      </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <Link className="nav-link" to="/">Categories</Link>
      </div>
      <div className="feature col">
        <div className="feature-icon bg-primary bg-gradient">
          <svg className="bi" width="1em" height="1em"></svg>
        </div>
        <h2>Featured title</h2>
        <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
        <Link className="nav-link" to="/">Categories</Link>
      </div>
    </div>
  </div>
        </div>
    )
}

export default Category123;