import { useState } from "react";
import farmers from "../data/farmers.json";
import "./FarmerEdit.css";

function FarmerEdit() {
    const farmer = farmers[0];

    const [farmName, setFarmName] = useState(farmer.farmName);
    const [name, setName] = useState(farmer.name);
    const [location, setLocation] = useState(farmer.location);
    const [comment, setComment] = useState(farmer.comment);

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

            <label className="edit-label">名前</label>
            <input 
            className="edit-input"
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label className="edit-label">場所</label>
            <input 
            className="edit-input"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            />

            <label className="edit-label">コメント</label>
            <textarea className="edit-textarea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            />

            <button className="edit-save-button">保存</button>
        </div>
    )
}

export default FarmerEdit;