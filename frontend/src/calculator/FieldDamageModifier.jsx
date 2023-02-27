import React from "react";

const FieldDamageModifier = (
  attackerFirstType,
  attackerSecondType,
  defenseType1,
  defenseType2,
  teraType,
  field,
  moveType
) => {
  let damageMultiplierByField = 1;
  const move = moveType;
  const attackerType1 = attackerFirstType;
  const attackerType2 = attackerSecondType;

  if (attackerType1 !== "ひこう" && attackerType2 !== "ひこう") {
    const fieldToMoveType = {
      エレキフィールド: "でんき",
      グラスフィールド: "くさ",
      サイコフィールド: "エスパー",
    };

    if (fieldToMoveType[field] === move) {
      damageMultiplierByField *= 1.3;
    }
  }

  if (teraType) {
    //防御側がテラスタルしていて、尚且つ飛行以外のタイプのとき
    if (teraType !== "ひこう") {
      if (field === "ミストフィールド" && move === "ドラゴン") {
        damageMultiplierByField *= 0.5;
      }
    }
  } else if (defenseType1 !== "ひこう" && defenseType2 !== "ひこう") {
    //テラスタルしていなくて、飛行以外のタイプの時
    if (field === "ミストフィールド" && move === "ドラゴン") {
      damageMultiplierByField *= 0.5;
    }
  }

  return damageMultiplierByField;
};

export default FieldDamageModifier;
