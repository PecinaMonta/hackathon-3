import CategoryList from "../Components/CategoryList";
import { Link } from "react-router-dom";

function Categories() {
    return (
        <div>
            
            <div className="col mt-3 mb-4">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Categories</li>
            </ol>
            </nav>
            </div>
            <div className="col">
                <div className="col d-flex mb-5 fill">
                <Link to="/productX" className="col-md-4 d-flex align-items-center justify-content-center">
                 <img src="/images/europe.jpg" className="img-fluid "  alt="..."/>
                </Link>
                
                    <CategoryList title="EUROPE" description="Europe is a continent which is also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. Comprising the westernmost peninsulas of the continental landmass of Eurasia, it shares the continental landmass of Afro-Eurasia with both Asia and Africa. It is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south and Asia to the east. Europe is commonly considered to be separated from Asia by the watershed of the Ural Mountains, the Ural River, the Caspian Sea, the Greater Caucasus, the Black Sea and the waterways of the Turkish Straits. Although much of this border is over land, Europe is almost always recognised as its own continent because of its great physical size and the weight of its history and traditions."/>
                </div>
                <div className="col d-flex mb-5">
                <Link to="/productN" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                 <img src="/images/asia.jpg" className="d-block" width="400"  alt="..."/>
                </Link>
                    <CategoryList title="ASIA" description="Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe, and the continental landmass of Afro-Eurasia with Africa and Europe. Asia covers an area of 44,579,000 square kilometres (17,212,000 sq mi), about 30% of Earth's total land area and 8.7% of the Earth's total surface area. The continent, which has long been home to the majority of the human population, was the site of many of the first civilizations. Its 4.5 billion people (as of June 2019) constitute roughly 60% of the world's population."/>
                </div>
                <div className="col d-flex mb-5">
                <Link to="/productZ" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                 <img src="/images/africa.jpg" className="d-block" width="400"  alt="..."/>
                </Link>
                    <CategoryList title="AFRICA" description="Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km2 (11.7 million square miles) including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population. Africa's population is the youngest amongst all the continents; the median age in 2012 was 19.7, when the worldwide median age was 30.4. Despite a wide range of natural resources, Africa is the least wealthy continent per capita, in part due to geographic impediments, legacies of European colonization in Africa and the Cold War, predatory/neo-colonialistic activities by Western nations and China, and undemocratic rule and deleterious policies. Despite this low concentration of wealth, recent economic expansion and the large and young population make Africa an important economic market in the broader global context." />
                </div>
            </div>
        </div>

    )
}

export default Categories;
