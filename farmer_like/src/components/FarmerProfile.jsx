import farmers from "../data/farmers.json";
import { useParams, Link } from "react-router-dom";
import "./FarmerProfile.css";
import { useState } from "react";

const vegetableEmojis = {
  トマト: "🍅",
  きゅうり: "🥒",
  なす: "🍆",
  にんじん: "🥕",
  とうもろこし: "🌽",
  ピーマン: "🫑",
  ブロッコリー: "🥦",
  じゃがいも: "🥔",
  さつまいも: "🍠",
  玉ねぎ: "🧅",
  にんにく: "🧄",
  レタス: "🥬",
  キャベツ: "🥬",
  ほうれん草: "🥬",
  かぼちゃ: "🎃",
};

const vegetableRecipes = {
  トマト: ["トマトとモッツァレラのカプレーゼ", "トマトの冷製パスタ"],
  きゅうり: ["きゅうりの浅漬け", "たたききゅうり"],
  なす: ["焼きなす", "麻婆なす"],
  とうもろこし: ["焼きとうもろこし", "コーンバター"],
  じゃがいも: ["ポテトサラダ", "肉じゃが"],
  玉ねぎ: ["オニオンスープ", "玉ねぎの丸焼き"],
  レタス: ["レタスチャーハン", "シーザーサラダ"],
  キャベツ: ["回鍋肉", "キャベツの浅漬け"],
  かぼちゃ: ["かぼちゃの煮物", "かぼちゃサラダ"],
};

function FarmerProfile() {
  const { id } = useParams();
  const farmer = farmers.find((f) => f.id === id);
  const [selectedVeg, setSelectedVeg] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSuggest = () => {
    if (selectedVeg === "") {
      return;
    }
    setRecipes(vegetableRecipes[selectedVeg] || []);
  };

  return (
    <div className="profile">
      <img className="header-image" src={farmer.headerImage} />

      <div className="profile-header">
        <img
          className="profile-image"
          src={farmer.profileImage}
          alt={farmer.name}
        />
        <div className="profile-names">
          <p className="farmer-name">{farmer.name}</p>
          <h1 className="farm-name">{farmer.farmName}</h1>
          <p className="location">📍 {farmer.location}</p>
        </div>
      </div>

      <div className="comment">{farmer.comment}</div>

      <h2 className="section-title">🛒 販売場所</h2>
      {farmer.salesLocations.map((loc, index) => (
        <div className="location-card" key={index}>
          <span className="location-name">{loc.name}</span>
          <div className="location-info">
            <span className="location-days">{loc.days}</span>
            <a
              className="map-link"
              href={loc.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              📍 GoogleMap
            </a>
          </div>
        </div>
      ))}

      <h2 className="section-title">🥕 主な取り扱い野菜</h2>
      <div className="vegetables">
        {farmer.vegetables.map((veg, index) => (
          <span
            className={
              selectedVeg === veg ? "veg-tag veg-tag-selected" : "veg-tag"
            }
            key={index}
            onClick={() => setSelectedVeg(veg)}
          >
            {veg}
            {vegetableEmojis[veg] || "🌱"}
          </span>
        ))}
      </div>
      <p>選択中: {selectedVeg}</p>

      <button className="suggest-button" onClick={handleSuggest}>料理を提案</button>

      {recipes.length > 0 && (
        <ul className="recipe-list">
          {recipes.map((recipe,index) => (
            <li key={index}>{recipe}</li>
          ))}
        </ul>
      )}

      <Link to="/" className="other-farmers-button">
        他の農家も見る
      </Link>
      <Link to={`/edit/${id}`} className="edit-link-button">
        編集する
      </Link>
    </div>
  );
}

export default FarmerProfile;
