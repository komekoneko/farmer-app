import farmers from "../data/farmers.json";

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
  const farmer = farmers[0];

  return (
    <div className="profile">
      <img src={farmer.headerImage} />

      <div>
        <p>{farmer.name}</p>
        <h1>{farmer.farmName}</h1>
        <p>{farmer.location}</p>
      </div>

    </div>
  );
}

export default FarmerProfile;
