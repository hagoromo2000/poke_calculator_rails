import React from 'react'
import './Calculator.css'


const Environment = () => {
  return (
    <>
      <div className="artboard phone-6 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div className="flex flex-row bg-gradient-to-r from-green-200 to-green-500" >
          <p className="pt-5 pl-5 mb-5 font-bold " >環境</p>
        </div>
      
        <div className="md:flex">

          <label for="underline_select" className="sr-only">Underline select</label>
          <select id="underline_select" className="mr-2 block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected className="text-center">天候を選択</option>
              <option value="" className="text-center">はれ</option>
              <option value="" className="text-center">あめ</option>
              <option value="" className="text-center">ゆき</option>
              <option value="" className="text-center">すなあらし</option>
          </select>

          <label for="underline_select" className="sr-only">Underline select</label>
          <select id="underline_select" className=" block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected className="text-center">フィールドを選択</option>
              <option value="" className="text-center">エレキフィールド</option>
              <option value="" className="text-center">グラスフィールド</option>
              <option value="" className="text-center">サイコフィールド</option>
              <option value="" className="text-center">ミストフィールド</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Environment