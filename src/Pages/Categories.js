import CategoryList from "../Components/CategoryList";

function Categories() {
    return (
        <div>
            <div className="col">
                <div className="col">
                    <h1>This is Features page</h1>
                </div>
            </div>
            <div className="col">
                <div className="col">
                    <CategoryList title="EUROPE" description="Europe is a continent which is also recognised as part of Eurasia, located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere."/>
                    sssssss
                </div>
                <div className="col">
                    <CategoryList title="ASIA" description="Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres."/>
                    sssssdddddd
                </div>
                <div className="col">
                    <CategoryList title="AFRICA" description="Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km² including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area."/>
                    fffffffffffffffff
                </div>
            </div>
        </div>

    )
}

export default Categories;
