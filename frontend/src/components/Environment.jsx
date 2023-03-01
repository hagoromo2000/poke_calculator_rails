import React from "react";
import "../css/Calculator.css";

const Environment = (props) => {
  function handleWeather(event) {
    const selectedValue = event.target.value;
    props.setWeather(selectedValue);
  }

  function handleField(event) {
    const selectedValue = event.target.value;
    props.setField(selectedValue);
  }
  return (
    <>
      <div className="artboard phone-6 bg-white rounded-lg shadow-xl mx-auto mt-10 mb-32 b-32">
        <div className="flex flex-row bg-gradient-to-r from-purple-200 rounded-t-lg to-purple-300">
          <p className="pt-5 pl-5 mb-5 font-bold ">環境</p>
        </div>

        <div className="md:flex">
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            onChange={handleWeather}
            className="mr-2 block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="null" className="text-center">
              天候を選択
            </option>
            <option value="はれ" className="text-center">
              はれ
            </option>
            <option value="あめ" className="text-center">
              あめ
            </option>
            <option value="ゆき" className="text-center">
              ゆき
            </option>
            <option value="すなあらし" className="text-center">
              すなあらし
            </option>
          </select>

          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            onChange={handleField}
            className=" block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          >
            <option value="null" className="text-center">
              フィールドを選択
            </option>
            <option value="エレキフィールド" className="text-center">
              エレキフィールド
            </option>
            <option value="グラスフィールド" className="text-center">
              グラスフィールド
            </option>
            <option value="サイコフィールド" className="text-center">
              サイコフィールド
            </option>
            <option value="ミストフィールド" className="text-center">
              ミストフィールド
            </option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Environment;
