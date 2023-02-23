import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Calculator.css";
import Pokemons from "../json/all_pokemons.json";
import Moves from "../json/all_moves.json";
import Items from "../json/all_items.json";
import Abilities from "../json/all_abilities.json";

// 以下、サーチャブルセレクトボックスの選択肢をJSONから生成する処理
const attack_moves = Moves.filter((move) => move.power !== null);
const all_moves = attack_moves.map((data) => {
  return { value: data, label: data.name };
});

const all_pokemons = Pokemons.map((data) => {
  return { value: data, label: data.name };
});

const all_items = Items.map((data) => {
  return { value: data.name, label: data.name };
});

const all_abilities = Abilities.map((data) => {
  return { value: data.name, label: data.name };
});

// コンポーネント
const Attacker = (props) => {
  // ポケモンの種族値、タイプの処理
  const [pokemon, setPokemon] = useState({ value: Pokemons[0] }); // {value : {ポケモンデータ}}の形にしないとhandleAttackで初期値を読み込めずエラー
  const handlePokemon = (pokemon) => {
    setPokemon(pokemon);

    // 攻撃実数値の計算
    const attack_value = Math.floor(
      ((pokemon.value.attack * 2 + 31 + attack_ev / 4) / 2 + 5) * attackNature
    );
    props.setAttack(attack_value);

    // 特攻実数値の計算
    const special_attack_value = Math.floor(
      ((pokemon.value.special_attack * 2 + 31 + special_attack_ev / 4) / 2 +
        5) *
        specialAttackNature
    );
    props.setSpecialAttack(special_attack_value);

    // タイプのセット
    props.setAttackerFirstType(pokemon.value.type1);
    props.setAttackerSecondType(pokemon.value.type2);
  };

  // 持ち物の制御
  const [item, setItem] = useState(null);
  const handleItem = (item) => {
    setItem(item);
  };

  // 特性の制御
  const [ability, setAbility] = useState(null);
  const handleAbility = (ability) => {
    setAbility(ability);
  };

  // わざ、ダメージ種別(物理,特殊)の制御
  const [move, setMove] = useState({
    value: Moves[0],
  });
  const handleMove = (move) => {
    setMove(move);
    props.setDamageClass(move.value.damage_class);
    props.setPower(move.value.power);
    props.setMoveType(move.value.type);
    //handlePower(move);
  };

  // 性格補正の制御
  // 攻撃の性格補正の制御
  const [attackNature, setAttackNature] = useState(1);
  const handleAttackNature = (event) => {
    setAttackNature(event);
  };

  // 特攻の性格補正の制御
  const [specialAttackNature, setSpecialAttackNature] = useState(1);
  const handleSpecialAttackNature = (event) => {
    setSpecialAttackNature(event);
  };

  // 攻撃努力値と実数値を連動させる処理
  const [attack_ev, setAttack_ev] = useState(0);
  const handleAttack = (event) => {
    setAttack_ev(event.target.value);
  };

  // useStateは非同期処理のためhandleAttack内に以下の処理を書くと値の反映に1操作分のラグが生じてしまう、そのためuseEffectを用いる
  // 攻撃努力値と性格補正が変化した際、副作用で実数値を再計算
  useEffect(() => {
    // attack_evの値が変更された後に実行される
    const attack_value = Math.floor(
      ((pokemon.value.attack * 2 + 31 + attack_ev / 4) / 2 + 5) * attackNature
    );
    props.setAttack(attack_value);
  }, [attack_ev, attackNature]);

  // 特攻努力値と実数値を連動させる処理
  const [special_attack_ev, setSpecialAttack_ev] = useState(0);
  const handleSpecialAttack = (event) => {
    setSpecialAttack_ev(event.target.value);
  };

  // 特攻努力値と性格補正が変化した際、副作用で実数値を再計算
  useEffect(() => {
    const special_attack_value = Math.floor(
      ((pokemon.value.special_attack * 2 + 31 + special_attack_ev / 4) / 2 +
        5) *
        specialAttackNature
    );
    props.setSpecialAttack(special_attack_value);
  }, [special_attack_ev, specialAttackNature]);

  // 技威力の制御　handleMoveに処理を移管したためコメントアウト(威力の入力受付をする際に復活の可能性あり)
  //const handlePower = (move) => {
  //};

  return (
    <>
      <div className="artboard phone-5 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div className="flex flex-row bg-gradient-to-r from-red-200 to-red-200">
          <p className="pt-5 pl-5 font-bold ">攻撃側</p>
          <button className="btn btn-primary ml-32 mt-2 mb-2">
            育成論から呼び出す
          </button>
        </div>

        {/* ポケモン選択　*/}
        <div className="flex mt-5 ml-4">
          <div className="w-64">
            <Select
              value={pokemon}
              onChange={handlePokemon}
              options={all_pokemons}
              isSearchable={true}
              placeholder="ポケモンを選択"
            />
          </div>
        </div>

        <div className="flex mt-5">
          {/* 攻撃実数値 */}
          <div className="pl-5 text-gray-600">
            <label className="text-xs">A実数値</label>
            <p>{props.attack}</p>
          </div>

          {/* 攻撃努力値 */}
          <div className="relative ml-4">
            <input
              type="number"
              onChange={handleAttack}
              id="attack_ev_floating_filled"
              min="0"
              max="252"
              step="4"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              A努力値
            </label>
          </div>

          {/* 性格補正 */}
          <label className="mt-auto mx-auto mb-auto text-gray-500 "></label>
          <div
            className="inline-flex rounded-md shadow-sm ml-4 mr-4 "
            role="group"
          >
            <button
              type="button"
              onClick={() => {
                handleAttackNature(1.1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              1.1
            </button>
            <button
              type="button"
              onClick={() => {
                handleAttackNature(1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              性格
            </button>
            <button
              type="button"
              onClick={() => {
                handleAttackNature(0.9);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              0.9
            </button>
          </div>
        </div>

        <div className="flex mt-5">
          {/* 特攻実数値 */}
          <div className="pl-5 text-gray-600">
            <label className="text-xs">C実数値</label>
            <p>{props.specialAttack}</p>
          </div>

          {/* 特攻努力値 */}
          <div className="relative ml-4">
            <input
              type="number"
              onChange={handleSpecialAttack}
              min="0"
              max="252"
              step="4"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              C努力値
            </label>
          </div>

          {/* 性格補正 */}
          <label className="mt-auto mx-auto mb-auto text-gray-500 "></label>
          <div
            className="inline-flex rounded-md shadow-sm ml-4 mr-4 "
            role="group"
          >
            <button
              type="button"
              onClick={() => {
                handleSpecialAttackNature(1.1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              1.1
            </button>
            <button
              type="button"
              onClick={() => {
                handleSpecialAttackNature(1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              性格
            </button>
            <button
              type="button"
              onClick={() => {
                handleSpecialAttackNature(0.9);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              0.9
            </button>
          </div>
        </div>

        <div className="flex mt-5 ml-4">
          {/* 特性 */}
          <div className="w-32">
            <Select
              value={ability}
              onChange={handleAbility}
              options={all_abilities}
              isSearchable={true}
              placeholder="とくせい"
            />
          </div>

          {/* 能力ランク */}
          <p className="mt-auto mb-auto ml-5 text-gray-500 ">ランク 0</p>

          <div className="inline-flex rounded-md shadow-smm ml-5" role="group">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              +
            </button>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              -
            </button>
          </div>
        </div>

        {/* 持ち物 */}
        <div className="flex mt-5 ml-4">
          <div className="w-64">
            <Select
              value={item}
              onChange={handleItem}
              options={all_items}
              isSearchable={true}
              placeholder="持ち物"
            />
          </div>

          {/* テラスタル */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text text-gray-500">テラス</span>
              <input
                type="checkbox"
                onClick={props.setAttackerTerastal}
                className="toggle toggle-error"
              />
            </label>
          </div>
        </div>

        {/* わざ */}
        <div className="flex mt-5 ml-4">
          <div className="w-64">
            <Select
              value={move}
              onChange={handleMove}
              options={all_moves}
              isSearchable={true}
              placeholder="わざを選択"
            />
          </div>

          {/* わざ威力 */}
          <div className="relative ml-4">
            <input
              type="number"
              // onChange={handlePower}
              value={move.value.power}
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              威力
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attacker;
