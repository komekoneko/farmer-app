import { Link } from "react-router-dom"
import farmers from "../data/farmers.json";
import { useState } from "react";
import "./FarmerList.css"

function FarmerList() {
    const [keyword, setKeyword] = useState("");

    const filteredFarmers = farmers.filter((farmer) => 
    farmer.farmName.includes(keyword) ||
    farmer.name.includes(keyword) ||
    farmer.location.includes(keyword)
    );
    return(
        <div className="farmer-list">
            <h1 className="app-title">🌱 推し農家</h1>

            <input 
            className="search-bar"
            type="text"
            placeholder="🔍 農家の名前・地域で探す"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            />

            {filteredFarmers.map((farmer, index) => (
                <Link className="farmer-card" to={`/farmer/${farmer.id}`} key={index}>
                    <img className="card-image"  src={farmer.profileImage} alt={farmer.name} />
                    <div className="card-info">
                        <p className="card-farm-name">{farmer.farmName}</p>
                        <p className="card-name">{farmer.name}</p>
                        <p>{farmer.location}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default FarmerList;
