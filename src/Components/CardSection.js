const CardSection = () => {
    return (
        <div className="card-section">
            <h2 className="cards-title">They cover every emotion</h2>
            <div className="cards">
                <div className="card" id="card-1">
                    <img className="card-img"src={require("../images/happy-cat.jpeg")} alt=""/>
                    <p>Happiness</p>
                </div>
                <div className="card" id="card-2">
                    <img className="card-img" src={require("../images/sad-cat.jpeg")} alt=""/>
                    <p>Sadness</p>
                </div>
                <div className="card" id="card-3">
                    <img className="card-img" src={require("../images/surprised-cat.jpeg")} alt=""/>
                    <p>Surprise</p>
                </div>
                <div className="card" id="card-4">
                    <img className="card-img" src={require("../images/uncertain-cat.jpeg")} alt=""/>
                    <p>Uncertainty</p>
                </div>
            </div>
        </div>
    );
}
 
export default CardSection;