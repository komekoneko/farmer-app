import farmers from "../data/farmers.json";
import "./FarmerList.css"

function FarmerList() {
    return(
        <div className="farmer-list">
            <h1 className="app-title">🌱 推し農家</h1>

            <div className="search-bar">🔍 農家の名前・地域で探す</div>

            {farmers.map((farmer, index) => (
                <div className="farmer-card" key={index}>
                    <img className="card-image"  src={farmer.profileImage} alt={farmer.name} />
                    <div className="card-info">
                        <p className="card-farm-name">{farmer.farmName}</p>
                        <p className="card-name">{farmer.name}</p>
                        <p>{farmer.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FarmerList;