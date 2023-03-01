import React, { useState, useEffect } from "react";
import Select from "react-select";
import "../css/NewPost.css";
import Pokemons from "../json/all_pokemons.json";
import Moves from "../json/all_moves.json";
import Items from "../json/all_items.json";
import Abilities from "../json/all_abilities.json";

const options = Moves.map((data) => {
  return { value: data.name, label: data.name };
});

const all_pokemons = Pokemons.map((data) => {
  return { value: data.name, label: data.name };
});

const all_items = Items.map((data) => {
  return { value: data.name, label: data.name };
});

const all_abilities = Abilities.map((data) => {
  return { value: data.name, label: data.name };
});

const all_natures = [
  { value: "すなお", label: "すなお(性格補正なし)" },
  { value: "さみしがり", label: "さみしがり A↑B↓" },
  { value: "いじっぱり", label: "いじっぱり A↑C↓" },
  { value: "やんちゃ", label: "やんちゃ A↑D↓" },
  { value: "ゆうかん", label: "ゆうかん A↑S↓" },
  { value: "ずぶとい", label: "ずぶとい B↑A↓" },
  { value: "わんぱく", label: "わんぱく B↑C↓" },
  { value: "のうてんき", label: "のうてんき B↑D↓" },
  { value: "のんき", label: "のんき B↑S↓" },
  { value: "ひかえめ", label: "ずぶとい C↑A↓" },
  { value: "おっとり", label: "おっとり C↑B↓" },
  { value: "うっかりや", label: "うっかりや C↑D↓" },
  { value: "れいせい", label: "れいせい C↑S↓" },
  { value: "おだやか", label: "おだやか D↑A↓" },
  { value: "おとなしい", label: "おとなしい D↑B↓" },
  { value: "しんちょう", label: "しんちょう D↑C↓" },
  { value: "なまいき", label: "なまいき D↑S↓" },
  { value: "おくびょう", label: "おくびょう S↑A↓" },
  { value: "せっかち", label: "せっかち S↑B↓" },
  { value: "ようき", label: "ようき S↑C↓" },
  { value: "むじゃき", label: "むじゃき S↑D↓" },
];

const all_types = [
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

const NewPost = () => {
  const [pokemon, setPokemon] = useState(null);
  const handlePokemon = (pokemon) => {
    setPokemon(pokemon);
  };

  const [item, setItem] = useState(null);
  const handleItem = (item) => {
    setItem(item);
  };

  const [nature, setNature] = useState("すなお");
  const handleNature = (nature) => {
    setNature(nature);
  };

  const [teraType, setTeraType] = useState("ノーマル");
  const handleTeraType = (teraType) => {
    setTeraType(teraType);
  };

  const [ability, setAbility] = useState(null);
  const handleAbility = (ability) => {
    setAbility(ability);
  };

  const [move1, setMove1] = useState(null);
  const handleMove1 = (move1) => {
    setMove1(move1);
  };

  const [move2, setMove2] = useState(null);
  const handleMove2 = (move2) => {
    setMove2(move2);
  };

  const [move3, setMove3] = useState(null);
  const handleMove3 = (move3) => {
    setMove3(move3);
  };

  const [move4, setMove4] = useState(null);
  const handleMove4 = (move4) => {
    setMove4(move4);
  };

  return (
    <>
      <div className="artboard phone-4 bg-white rounded-lg shadow-xl mx-auto mt-10">
        <div className="flex flex-row bg-gradient-to-r from-green-200 to-green-500">
          <p className="pt-5 pl-5 mb-5 font-bold text-gray-600 ">
            育成論新規作成
          </p>
        </div>

        <div className="form-control w-full max-w-xs ml-4">
          <label className="label">
            <span className="label-text text-gray-600">育成論のタイトル</span>
          </label>
          <input
            type="text"
            placeholder="最速CSサザンドラ"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="ml-10 mt-4">
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

        <div className="ml-10 mt-4">
          <div className="w-64">
            <Select
              value={ability}
              onChange={handleAbility}
              options={all_abilities}
              isSearchable={true}
              placeholder="とくせいを選択"
            />
          </div>
        </div>

        <div className="ml-10 mt-4">
          <div className="w-64">
            <Select
              value={teraType}
              onChange={handleTeraType}
              options={all_types}
              isSearchable={true}
              placeholder="テラスタイプを選択"
            />
          </div>
        </div>

        <div className="ml-10 mt-4">
          <div className="w-64">
            <Select
              value={nature}
              onChange={handleNature}
              options={all_natures}
              isSearchable={true}
              placeholder="性格を選択"
            />
          </div>
        </div>

        <div className="ml-10 mt-4">
          <div className="w-64">
            <Select
              value={item}
              onChange={handleItem}
              options={all_items}
              isSearchable={true}
              placeholder="持ち物を選択"
            />
          </div>
        </div>

        <label className="label ml-4 mt-4">
          <span className="label-text text-gray-600">努力値</span>
        </label>

        <div className="flex justify-center">
          <div className="relative">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              HP
            </label>
          </div>
          <div className="relative ml-4">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              攻撃
            </label>
          </div>
          <div className="relative ml-4">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              防御
            </label>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="relative">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              特攻
            </label>
          </div>
          <div className="relative ml-4">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              特防
            </label>
          </div>
          <div className="relative ml-4">
            <input
              type="number"
              id="attack_ev_floating_filled"
              className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer "
              placeholder=" "
            />
            <label
              htmlfor="attack_ev_floating_filled"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4  origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
            >
              素早さ
            </label>
          </div>
        </div>

        <div className="mt-4 ml-10">
          <label className="label mt-4">
            <span className="label-text text-gray-600">わざ1</span>
          </label>
          <div className="w-64">
            <Select
              value={move1}
              onChange={handleMove1}
              options={options}
              isSearchable={true}
              placeholder="わざを選択"
            />
          </div>

          <label className="label">
            <span className="label-text text-gray-600">わざ2</span>
          </label>
          <div className="w-64">
            <Select
              value={move2}
              onChange={handleMove2}
              options={options}
              isSearchable={true}
              placeholder="わざを選択"
            />
          </div>

          <label className="label">
            <span className="label-text text-gray-600">わざ3</span>
          </label>
          <div className="w-64">
            <Select
              value={move3}
              onChange={handleMove3}
              options={options}
              isSearchable={true}
              placeholder="わざを選択"
            />
          </div>
          <label className="label">
            <span className="label-text text-gray-600">わざ4</span>
          </label>
          <div className="w-64">
            <Select
              value={move4}
              onChange={handleMove4}
              options={options}
              isSearchable={true}
              placeholder="わざを選択"
            />
          </div>
        </div>

        <div className="form-control ml-4 mr-4 mt-4">
          <label className="label">
            <span className="label-text text-gray-600">概要</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-60"
            placeholder="おくびょう最速、とくこう252振りで、より多くの相手に上から負荷をかける運用をします。"
          ></textarea>
        </div>

        <div className="flex flex-row-reverse mt-4 mr-4">
          <button className="btn btn-active btn-primary text-gray-200">
            投稿
          </button>
        </div>
      </div>
    </>
  );
};

export default NewPost;
