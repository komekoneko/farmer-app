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

const comboRecipes = {
  "トマト,なす": ["ラタトゥイユ", "夏野菜カレー"],
  "トマト,きゅうり": ["ガスパチョ", "夏野菜サラダ"],
  "きゅうり,キャベツ": ["コールスロー", "浅漬けミックス"],
  "じゃがいも,玉ねぎ": ["肉じゃが", "ポテトスープ"],
  "トマト,じゃがいも,玉ねぎ": ["ミネストローネ", "野菜ゴロゴロカレー"],
};

function FarmerProfile() {
  const { id } = useParams();
  const farmer = farmers.find((f) => f.id === id);
  const [selectedVeg, setSelectedVeg] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [homeVegs, setHomeVegs] = useState([]);

  const handleSuggest = () => {
    if (selectedVeg === "") {
      return;
    }
    const allVegs = [selectedVeg, ...homeVegs];
    const comboKey = [...allVegs].sort().join(",");

    const matchedKey = Object.keys(comboRecipes).find(
      (key) => key.split(",").sort().join(",") === comboKey,
    );

    if (matchedKey) {
      setRecipes(comboRecipes[matchedKey]);
      return;
    }

    const eachRecipes = allVegs.flatMap((veg) => vegetableRecipes[veg] || []);
    setRecipes(eachRecipes);
  };

  const handleAddhomeVeg = (veg) => {
    if (veg === "") {
      return;
    }
    if (homeVegs.includes(veg)) {
      return;
    }
    setHomeVegs([...homeVegs, veg]);
  };

  const handleRemoveHomeVeg = (veg) => {
    setHomeVegs(homeVegs.filter((v) => v !== veg));
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
          <span className="veg-tag info-tag" key={index}>
            {veg}
            {vegetableEmojis[veg] || "🌱"}
          </span>
        ))}
      </div>

      <div className="recipe-box">
        <h2 className="recipe-box-title">🍳 野菜を選んで料理を提案</h2>

        <p className="step-label">① この農家の野菜から選ぶ</p>
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

        <p className="step-label">② 家にある野菜を足す</p>
        <select
          className="home-veg-select"
          value=""
          onChange={(e) => handleAddhomeVeg(e.target.value)}
        >
          <option value="">野菜を選んで追加</option>
          {Object.keys(vegetableRecipes).map((veg, index) => (
            <option value={veg} key={index}>
              {veg}
            </option>
          ))}
        </select>

        <div className="home-vegetables">
          {homeVegs.map((veg, index) => (
            <span
              className="veg-tag veg-tag-selected"
              key={index}
              onClick={() => handleRemoveHomeVeg(veg)}
            >
              {veg}
              {vegetableEmojis[veg] || "🌱"}
            </span>
          ))}
        </div>

        <button className="suggest-button" onClick={handleSuggest}>
          料理を提案
        </button>

        {recipes.length > 0 && (
          <ul className="recipe-list">
            {recipes.map((recipe, index) => (
              <li key={index}>{recipe}</li>
            ))}
          </ul>
        )}
      </div>

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
