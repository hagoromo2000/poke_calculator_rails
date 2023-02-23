import React, { useState, useEffect } from "react";
import { useToggle } from "react-use";
import Attacker from "./Attacker";
import "./Calculator.css";
import Defender from "./Defender";
import Environment from "./Environment";
import Footer from "./Footer";

const Calculator = () => {
  const [attack, setAttack] = useState(100);
  const [specialAttack, setSpecialAttack] = useState(100);
  const [moveType, setMoveType] = useState(null);
  const [power, setPower] = useState(0);
  const [damageClass, setDamageClass] = useState("ぶつり");
  const [attackerFirstType, setAttackerFirstType] = useState(null);
  const [attackerSecondType, setAttackerSecondType] = useState(null);
  const [attackerTerastal, setAttackerTerastal] = useToggle(false);

  const [hp, setHp] = useState(100);
  const [defense, setDefense] = useState(100);
  const [specialDefense, setSpecialDefense] = useState(100);

  const [damage, setDamage] = useState(0);
  const [minDamage, setMinDamage] = useState(0);
  const [maxDamage, setMaxDamage] = useState(0);

  //　各種値が変化すると、副作用で基礎ダメージが計算される。
  useEffect(() => {
    setDamage(() => {
      let baseDamage = 0;

      //   ダメージ=攻撃側のレベル×2÷5+2→切り捨て
      // 　×物理技(特殊技)の威力×攻撃側のこうげき(とくこう)÷防御側のぼうぎょ(とくぼう)→切り捨て
      // 　÷50+2→切り捨て
      // 　×乱数(0.85, 0.86, …… ,0.99, 1.00 の何れか)→切り捨て
      if (damageClass === "ぶつり") {
        baseDamage = Math.floor(
          Math.floor((22 * power * attack) / defense) / 50 + 2
        );
      } else {
        baseDamage = Math.floor(
          Math.floor((22 * power * specialAttack) / specialDefense) / 50 + 2
        );
      }

      return baseDamage;
    });
  }, [attack, power, defense, specialAttack, specialDefense, hp, damageClass]);

  // 基礎ダメージが計算されると、乱数幅を掛けた最大ダメージと最小ダメージが算出され、それに各種倍率を掛けて最終的なダメージが算出される。
  useEffect(() => {
    let stab = 1;
    //　タイプ一致の場合、タイプ一致補正でダメージが1.5倍になる（same_type_attack_bonus = stab)
    if (attackerFirstType === moveType || attackerSecondType === moveType) {
      stab = stab + 0.5;
    }

    // テラスタル中の場合、タイプ一致と同じ扱い。これはタイプ一致補正と重複する(2.25倍にはならず、2倍になる)
    if (attackerTerastal === true) {
      stab = stab + 0.5;
    }

    let minBaseDamage = Math.floor(damage * 0.85);
    let maxBaseDamage = damage;

    setMinDamage(Math.round(minBaseDamage * stab));
    setMaxDamage(Math.round(maxBaseDamage * stab));
  }, [damage, attackerTerastal, moveType]);
  return (
    <>
      <div className="md:flex">
        <Attacker
          setAttack={setAttack}
          setSpecialAttack={setSpecialAttack}
          setMoveType={setMoveType}
          setPower={setPower}
          setDamageClass={setDamageClass}
          setAttackerFirstType={setAttackerFirstType}
          setAttackerSecondType={setAttackerSecondType}
          setAttackerTerastal={setAttackerTerastal}
          power={power}
          attack={attack}
          specialAttack={specialAttack}
        />
        <Defender
          setHp={setHp}
          setDefense={setDefense}
          setSpecialDefense={setSpecialDefense}
          hp={hp}
          defense={defense}
          specialDefense={specialDefense}
        />
      </div>
      <div className="h-64 bg-blue-100">
        <Environment />
      </div>
      <Footer
        damage={damage}
        minDamage={minDamage}
        maxDamage={maxDamage}
        hp={hp}
      />
    </>
  );
};

export default Calculator;
