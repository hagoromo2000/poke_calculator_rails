import React, { useState, useEffect } from "react";
import Select from "react-select";
import "./Calculator.css";
import Pokemons from "../json/all_pokemons.json";
import Items from "../json/all_items.json";
import Abilities from "../json/all_abilities.json";

const all_pokemons = Pokemons.map((data) => {
  return { value: data, label: data.name };
});

const all_items = Items.map((data) => {
  return { value: data.name, label: data.name };
});

const all_abilities = Abilities.map((data) => {
  return { value: data.name, label: data.name };
});

const all_types = [
  { value: null, label: "なし" },
  { value: "ノーマル", label: "ノーマル" },
  { value: "ほのお", label: "ほのお" },
  { value: "みず", label: "みず" },
  { value: "くさ", label: "くさ" },
  { value: "こおり", label: "こおり" },
  { value: "かくとう", label: "かくとう" },
  { value: "どく", label: "どく" },
  { value: "じめん", label: "じめん" },
  { value: "ひこう", label: "ひこう" },
  { value: "エスパー", label: "エスパー" },
  { value: "むし", label: "むし" },
  { value: "いわ", label: "いわ" },
  { value: "ゴースト", label: "ゴースト" },
  { value: "ドラゴン", label: "ドラゴン" },
  { value: "あく", label: "あく" },
  { value: "はがね", label: "はがね" },
  { value: "フェアリー", label: "フェアリー" },
];

//　コンポーネント
const Defender = (props) => {
  const [pokemon, setPokemon] = useState({
    value: Pokemons[0],
    label: Pokemons[0].name,
  });
  const handlePokemon = (pokemon) => {
    setPokemon(pokemon);

    // タイプのセット
    props.setDefenseType1(pokemon.value.type1);
    props.setDefenseType2(pokemon.value.type2);
  };

  const [item, setItem] = useState(null);
  const handleItem = (item) => {
    setItem(item);
  };

  const handleTeraType = (teraType) => {
    props.setTeraType(teraType.value);
  };

  const [ability, setAbility] = useState(null);
  const handleAbility = (ability) => {
    setAbility(ability);
  };

  // 性格補正の制御
  // 攻撃の性格補正の制御
  const [defenseNature, setDefenseNature] = useState(1);
  const handleDefenseNature = (event) => {
    setDefenseNature(event);
  };

  // 特攻の性格補正の制御
  const [specialDefenseNature, setSpecialDefenseNature] = useState(1);
  const handleSpecialDefenseNature = (event) => {
    setSpecialDefenseNature(event);
  };

  // Rank補正の制御
  const handleRankIncrease = () => {
    if (props.defenseRank <= 5) {
      props.setDefenseRank(props.defenseRank + 1);
    }
  };
  const handleRankDecrease = () => {
    if (props.defenseRank >= -5) {
      props.setDefenseRank(props.defenseRank - 1);
    }
  };

  // HP努力値と実数値を連動させる処理
  const [hp_ev, setHp_ev] = useState(0);
  const handleHp = (event) => {
    setHp_ev(event.target.value);
  };
  // ポケモン、努力値が変化した時、副作用で実数値が計算される
  useEffect(() => {
    const hp_value = Math.floor(
      (pokemon.value.hp * 2 + 31 + hp_ev / 4) / 2 + 60
    );
    props.setHp(hp_value);
  }, [hp_ev, pokemon]);

  // 防御努力値と実数値を連動させる処理
  const [defense_ev, setDefense_ev] = useState(0);
  const handleDefense = (event) => {
    setDefense_ev(event.target.value);
  };

  // ポケモン、防御努力値、性格補正が変化した際、副作用で実数値を再計算
  useEffect(() => {
    const defense_value = Math.floor(
      ((pokemon.value.defense * 2 + 31 + defense_ev / 4) / 2 + 5) *
        defenseNature
    );
    props.setDefense(defense_value);
  }, [defense_ev, defenseNature, pokemon]);

  // 特防努力値と実数値を連動させる処理
  const [specialDefense_ev, setSpecialDefense_ev] = useState(0);
  const handleSpecialDefense = (event) => {
    setSpecialDefense_ev(event.target.value);
  };

  // ポケモン、特防努力値、性格補正が変化した際、副作用で実数値を再計算
  useEffect(() => {
    const special_defense_value = Math.floor(
      ((pokemon.value.special_defense * 2 + 31 + specialDefense_ev / 4) / 2 +
        5) *
        specialDefenseNature
    );
    props.setSpecialDefense(special_defense_value);
  }, [specialDefense_ev, specialDefenseNature, pokemon]);

  return (
    <>
      <div className="artboard phone-5 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div className="flex flex-row bg-gradient-to-r from-blue-200 to-blue-200">
          <p className="pt-5 pl-5 font-bold ">防御側</p>
          <button className="btn btn-primary ml-32 mt-2 mb-2">
            育成論から呼び出す
          </button>
        </div>

        {/* ポケモン選択モーダル　*/}
        <div className="w-64 mt-5 ml-4">
          <Select
            value={pokemon}
            onChange={handlePokemon}
            options={all_pokemons}
            isSearchable={true}
            placeholder="ポケモンを選択"
          />
        </div>

        <div className="flex mt-5">
          {/* HP実数値 */}
          <div className="pl-5 text-gray-600">
            <label className="text-xs">H実数値</label>
            <p>{props.hp}</p>
          </div>

          {/* HP努力値 */}
          <div className="relative ml-4">
            <input
              type="number"
              onChange={handleHp}
              min="0"
              max="252"
              step="4"
              id="hp_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="hp_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              H努力値
            </label>
          </div>

          {/* テラスタイプ */}
          <div className="ml-4 mt-2">
            <div className="w-32">
              <Select
                value={props.teraType}
                onChange={handleTeraType}
                options={all_types}
                isSearchable={true}
                placeholder="テラス"
              />
            </div>
          </div>
        </div>

        <div className="flex mt-5">
          {/* 防御実数値 */}
          <div className="pl-5 text-gray-600">
            <label className="text-xs">B実数値</label>
            <p>{props.defense}</p>
          </div>

          {/* 防御努力値 */}
          <div className="relative ml-4">
            <input
              type="number"
              id="defense_ev_floating_filled"
              onChange={handleDefense}
              min="0"
              max="252"
              step="4"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="defense_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              B努力値
            </label>
          </div>

          {/* 防御性格補正 */}
          <label className="mt-auto mx-auto mb-auto text-gray-500 "></label>
          <div
            className="inline-flex rounded-md shadow-sm ml-4 mr-4 "
            role="group"
          >
            <button
              type="button"
              onClick={() => {
                handleDefenseNature(1.1);
              }}
              className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
                defenseNature === 1.1
                  ? "ring-2 ring-blue-700 text-blue-700 z-10"
                  : ""
              }`}
            >
              1.1
            </button>
            <button
              type="button"
              onClick={() => {
                handleDefenseNature(1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              性格
            </button>
            <button
              type="button"
              onClick={() => {
                handleDefenseNature(0.9);
              }}
              className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
                defenseNature === 0.9
                  ? "ring-2 ring-blue-700 text-blue-700 z-10"
                  : ""
              }`}
            >
              0.9
            </button>
          </div>
        </div>

        <div className="flex mt-5">
          {/* 特防実数値 */}
          <div className="pl-5 text-gray-600">
            <label className="text-xs">D実数値</label>
            <p>{props.specialDefense}</p>
          </div>

          {/* 特防努力値 */}
          <div className="relative ml-4">
            <input
              type="number"
              onChange={handleSpecialDefense}
              min="0"
              max="252"
              step="4"
              id="defense_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlFor="defense_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              D努力値
            </label>
          </div>

          {/* 特防性格補正 */}
          <label className="mt-auto mx-auto mb-auto text-gray-500 "></label>
          <div
            className="inline-flex rounded-md shadow-sm ml-4 mr-4 "
            role="group"
          >
            <button
              type="button"
              onClick={() => {
                handleSpecialDefenseNature(1.1);
              }}
              className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
                specialDefenseNature === 1.1
                  ? "ring-2 ring-blue-700 text-blue-700 z-10"
                  : ""
              }`}
            >
              1.1
            </button>
            <button
              type="button"
              onClick={() => {
                handleSpecialDefenseNature(1);
              }}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              性格
            </button>
            <button
              type="button"
              onClick={() => {
                handleSpecialDefenseNature(0.9);
              }}
              className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 ${
                specialDefenseNature === 0.9
                  ? "ring-2 ring-blue-700 text-blue-700 z-10"
                  : ""
              }`}
            >
              0.9
            </button>
          </div>
        </div>

        {/* とくせい */}
        <div className="flex mt-5 ml-4">
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
          <p className="mt-auto mb-auto ml-5 text-gray-500 ">
            ランク {(props.defenseRank < 0 ? "" : "+") + props.defenseRank}
          </p>

          <div className="inline-flex rounded-md shadow-smm ml-5" role="group">
            <button
              type="button"
              onClick={handleRankIncrease}
              className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              +
            </button>
            <button
              type="button"
              onClick={handleRankDecrease}
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
        </div>
      </div>
    </>
  );
};

export default Defender;
