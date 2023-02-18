import React from 'react'
import './Calculator.css'


const Environment = () => {
  return (
    <>
      <div className="artboard phone-6 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div class="flex flex-row bg-gradient-to-r from-green-200 to-green-500" >
          <p className="pt-5 pl-5 mb-5 font-bold " >環境</p>
        </div>
      
        <div class="flex">

          <label for="underline_select" class="sr-only">Underline select</label>
          <select id="underline_select" class="ml-2 mr-2 block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected class="text-center">天候を選択</option>
              <option value="" class="text-center">はれ</option>
              <option value="" class="text-center">あめ</option>
              <option value="" class="text-center">ゆき</option>
              <option value="" class="text-center">すなあらし</option>
          </select>

          <label for="underline_select" class="sr-only">Underline select</label>
          <select id="underline_select" class="mr-2 block py-2.5 px-0 w-full text-sm text-gray-800 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option selected class="text-center">フィールドを選択</option>
              <option value="" class="text-center">エレキフィールド</option>
              <option value="" class="text-center">グラスフィールド</option>
              <option value="" class="text-center">サイコフィールド</option>
              <option value="" class="text-center">ミストフィールド</option>
          </select>
        </div>
      </div>
    </>
  )
}

export default Environment