import React, { useState, useEffect } from "react";
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

  const [hp, setHp] = useState(100);
  const [defense, setDefense] = useState(100);
  const [specialDefense, setSpecialDefense] = useState(100);

  const [damage, setDamage] = useState(0);

  useEffect(() => {
    setDamage(() => {
      let baseDamage = 0;
      if (damageClass === "ぶつり") {
        baseDamage = (22 * power * attack) / defense / 50 + 2;
      } else {
        baseDamage = (22 * power * specialAttack) / defense / 50 + 2;
      }
      if (attackerFirstType === moveType || attackerSecondType === moveType) {
        baseDamage = baseDamage * 1.5;
      }
      return baseDamage;
    });
  }, [
    attack,
    power,
    defense,
    specialAttack,
    specialDefense,
    hp,
    damageClass,
    moveType,
  ]);

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
      <Footer damage={damage} hp={hp} />
    </>
  );
};

export default Calculator;
