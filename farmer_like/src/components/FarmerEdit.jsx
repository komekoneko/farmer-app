import { useState } from "react";
import farmers from "../data/farmers.json";
import "./FarmerEdit.css";

function FarmerEdit() {
    const farmer = farmers[0];

    const [farmName, setFarmName] = useState(farmer.farmName);

    return(
        <div className="edit">
            <h1 className="edit-title">プロフィール編集</h1>

            <label className="edit-label">農園名</label>
            <input 
            className="edit-input"
            type="text"
            value={farmName}
            onChange={(e) => setFarmName(e.target.value)}
            />
     
        <p className="edit-preview">入力中: {farmName}</p>
        </div>
    )
}

export default FarmerEdit;