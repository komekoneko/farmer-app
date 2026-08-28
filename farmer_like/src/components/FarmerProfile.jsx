import farmers from "../data/farmers.json";
import { useParams, Link } from "react-router-dom";
import "./FarmerProfile.css";

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

function FarmerProfile() {
  const { id } = useParams();
  const farmer = farmers.find((f) => f.id === id);

  return (
    <div className="profile">
      <img className="header-image" src={farmer.headerImage} />

      <div className="profile-header">
        <img className="profile-image" src={farmer.profileImage} alt={farmer.name} />
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
            <a className="map-link" href={loc.mapUrl} target="_blank" rel="noreferrer">📍 GoogleMap</a>
          </div>
        </div>
      ))}

    <h2 className="section-title">🥕 主な取り扱い野菜</h2>
    <div className="vegetables">
      {farmer.vegetables.map((veg, index) => (
        <span className="veg-tag" key={index}>
          {veg}{vegetableEmojis[veg] || "🌱"}
        </span>
      ))}
    </div>

    <Link to="/" className="other-farmers-button">他の農家も見る</Link>
    </div>
  );
}

export default FarmerProfile;
