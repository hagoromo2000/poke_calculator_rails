// タイプ相性による倍率の計算処理
const TypeCompatibility = (moveType, teraType, type1, type2) => {
  let compatibility = 1;
  const move = moveType;
  let typeArray = [];

  if (teraType) {
    // テラスタルしている場合
    typeArray = [teraType];
  } else {
    // テラスタルしていない場合
    typeArray = [type1, type2];
  }

  // type1とtype2についてそれぞれ計算　繰り返し処理
  for (let i = 0; i < typeArray.length; i++) {
    switch (move) {
      //わざタイプがノーマル
      case "ノーマル":
        if (["いわ", "はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "ゴースト") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがほのお
      case "ほのお":
        if (["くさ", "はがね", "むし", "こおり"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          ["ほのお", "みず", "いわ", "ドラゴン"].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがみず
      case "みず":
        if (["ほのお", "じめん", "いわ"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["みず", "くさ", "ドラゴン"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがでんき
      case "でんき":
        if (["みず", "ひこう"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["でんき", "くさ", "ドラゴン"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "じめん") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがくさ
      case "くさ":
        if (["みず", "じめん", "いわ"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          [
            "ほのお",
            "くさ",
            "どく",
            "ひこう",
            "むし",
            "ドラゴン",
            "はがね",
          ].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがこおり
      case "こおり":
        if (["くさ", "じめん", "ひこう", "ドラゴン"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          ["ほのお", "みず", "こおり", "はがね"].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがかくとう
      case "かくとう":
        if (
          ["ノーマル", "こおり", "いわ", "はがね", "あく"].includes(
            typeArray[i]
          )
        ) {
          compatibility = compatibility * 2;
        } else if (
          ["どく", "ひこう", "エスパー", "むし", "フェアリー"].includes(
            typeArray[i]
          )
        ) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "ゴースト") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがどく
      case "どく":
        if (["くさ", "フェアリー"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          ["どく", "じめん", "いわ", "ゴースト"].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "はがね") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがじめん
      case "どく":
        if (
          ["ほのお", "どく", "はがね", "でんき", "いわ"].includes(typeArray[i])
        ) {
          compatibility = compatibility * 2;
        } else if (["くさ", "むし"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "ひこう") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがひこう
      case "ひこう":
        if (["くさ", "かくとう", "むし"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["でんき", "いわ", "はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがエスパー
      case "エスパー":
        if (["かくとう", "どく"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["エスパー", "はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "あく") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがむし
      case "むし":
        if (["くさ", "エスパー", "あく"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          [
            "ほのお",
            "かくとう",
            "どく",
            "ひこう",
            "ゴースト",
            "はがね",
            "フェアリー",
          ].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがいわ
      case "いわ":
        if (["ほのお", "ひこう", "むし", "こおり"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["かくとう", "じめん", "はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがゴースト
      case "ゴースト":
        if (["ゴースト", "エスパー"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["あく"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "ノーマル") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがドラゴン
      case "ドラゴン":
        if (["ドラゴン"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        } else if (typeArray[i] === "フェアリー") {
          compatibility = compatibility * 0;
        }
        break;
      //わざタイプがあく
      case "あく":
        if (["エスパー", "ゴースト"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["かくとう", "あく", "フェアリー"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがはがね
      case "はがね":
        if (["いわ", "こおり", "フェアリー"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (
          ["ほのお", "でんき", "みず", "はがね"].includes(typeArray[i])
        ) {
          compatibility = compatibility / 2;
        }
        break;
      //わざタイプがフェアリー
      case "フェアリー":
        if (["かくとう", "ドラゴン", "あく"].includes(typeArray[i])) {
          compatibility = compatibility * 2;
        } else if (["ほのお", "どく", "はがね"].includes(typeArray[i])) {
          compatibility = compatibility / 2;
        }
        break;
    }
  }

  return compatibility;
};

export default TypeCompatibility;
