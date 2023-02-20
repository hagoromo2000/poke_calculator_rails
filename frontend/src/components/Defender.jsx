import React from 'react'
import './Calculator.css'

const Defender = (props) => {

  const handleHp = (event) => {
    props.setHp(event.target.value)
  }

  const handleDefense = (event) => {
    props.setDefense(event.target.value)
  }


  return (
    <>
      <div className="artboard phone-5 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div className="flex flex-row bg-gradient-to-r from-blue-200 to-blue-500" >
          <p className="pt-5 pl-5 font-bold " >防御側</p>
          <button className="btn brn-primary ml-32 mt-2 mb-2">育成論から呼び出す</button>
        </div>

        {/* ポケモン選択モーダル　*/}
        <label htmlFor="attacker-pokemon-name-modal" className="btn btn-outline btn-wide btn-secondary mt-5 ml-4 ">クリックしてポケモンを選択</label>
        
        <div className="flex mt-5">

          {/* HP実数値 */}
          <div className="relative">
            <input type="number" onChange={handleHp} id="hp_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5  ml-4 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label for="hp_floating_filled" className="ml-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">HP実数値</label>
          </div>

          <div className="relative ml-4">
            <input type="number" id="hp_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label for="hp_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">HP努力値</label>
          </div>

          <label htmlFor="tera-type-modal-3" className="btn btn-outline ml-2 btn-secondary">テラスタイプ</label>
        </div>

        <div className="flex mt-5">
          <div className="relative">
            <input type="number" onChange={handleDefense} id="defense_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5  ml-4 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label for="defense_floating_filled" className="ml-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">B実数値</label>
          </div>

          <div className="relative ml-4">
            <input type="number" id="defense_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label for="defense_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">B努力値</label>
          </div>

          <label className='mt-auto mx-auto mb-auto text-gray-500 '></label>
          <div className="inline-flex rounded-md shadow-sm ml-4 mr-4 " role="group">
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              1.1
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              性格
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              0.9
            </button>
          </div>
        </div>

        <div className="flex mt-5 ml-4">
          <select className="select select-secondary w-40">
            <option disabled selected>特性を選択</option>
            <option>しんりょく</option>
            <option>へんげんじざい</option>
          </select>

          <p className='mt-auto mb-auto ml-5 text-gray-500 '>ランク 0</p>

          <div className="inline-flex rounded-md shadow-smm ml-5" role="group">
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              +
            </button>
            <button type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
              -
            </button>
          </div>
        </div>

        <div className="flex mt-5 ml-4">
          <select className="select select-secondary w-40">
            <option disabled selected>持ち物を選択</option>
            <option>とつげきチョッキ</option>
            <option>しんかのきせき</option>
          </select>
        </div>
        
      </div>


      {/* ポケモン名モーダル */}
      <input type="checkbox" id="attacker-pokemon-name-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">ポケモンの検索窓</h3>
          <p className="py-4">検索候補が表示されます。</p>
          <div className="modal-action">
            <label htmlFor="attacker-pokemon-name-modal" className="btn">決定</label>
          </div>
        </div>
      </div>


      {/* テラスタイプモーダル */}
      <input type="checkbox" id="tera-type-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="tera-type-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">テラスタイプモーダル</h3>
          <p className="py-4">テラスタイプの選択</p>
        </div>
      </div>

      {/* わざモーダル */}
      <input type="checkbox" id="move-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="move-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">わざの検索窓</h3>
          <p className="py-4">わざの検索結果</p>
        </div>
      </div>
    </>
  )
}

export default Defender