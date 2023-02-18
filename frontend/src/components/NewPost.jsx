import React, {useState} from 'react'
import Select from 'react-select'
import './NewPost.css'

const options = [
  { value: 'しんそく', label: 'しんそく' },
  { value: 'ほのおのパンチ', label: 'ほのおのパンチ' },
  { value: 'げきりん', label: 'げきりん' },
  { value: 'はねやすめ', label: 'はねやすめ' },
  { value: 'じしん', label: 'じしん' },
];

const NewPost = () => {

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
        <div className="flex flex-row bg-gradient-to-r from-green-200 to-green-500" >
          <p className="pt-5 pl-5 mb-5 font-bold text-gray-600 " >育成論新規作成</p>
        </div>

        <div className="form-control w-full max-w-xs ml-4">
          <label className="label">
            <span className="label-text text-gray-600">育成論のタイトル</span>
          </label>
          <input type="text" placeholder="CS臆病サザンドラ" className="input input-bordered w-full max-w-xs" />
        </div>

        <label htmlFor="attacker-pokemon-name-modal" className="btn btn-outline btn-wide btn-secondary ml-4 mt-5 ">クリックしてポケモンを選択</label>

        <select className="select select-secondary w-40 ml-4 mt-5  text-gray-600">
          <option disabled selected className='text-gray-400'>テラスタイプ</option>
          <option>ノーマル</option>
          <option>ほのお</option>
          <option>みず</option>
          <option>でんき</option>
          <option>くさ</option>
          <option>こおり</option>
          <option>かくとう</option>
          <option>どく</option>
          <option>じめん</option>
          <option>ひこう</option>
          <option>エスパー</option>
          <option>むし</option>
          <option>いわ</option>
          <option>ゴースト</option>
          <option>ドラゴン</option>
          <option>あく</option>
          <option>はがね</option>
          <option>フェアリー</option>
        </select>

        <select className="select select-secondary w-40 ml-4 text-gray-600">
          <option disabled selected>特性を選択</option>
          <option>しんりょく</option>
          <option>へんげんじざい</option>
        </select>

        <select className="select select-secondary w-40 ml-4 mt-5 text-gray-600">
          <option disabled selected>持ち物を選択</option>
          <option>こだわりハチマキ</option>
          <option>こだわりメガネ</option>
        </select>

        <select className="select select-secondary w-40 ml-4 mt-5 text-gray-600">
          <option disabled selected>性格を選択</option>
          <option>すなお(補正なし)</option>
          <option>さみしがり</option>
          <option>いじっぱり</option>
          <option>やんちゃ</option>
          <option>ゆうかん</option>
          <option>ずぶとい</option>
          <option>わんぱく</option>
          <option>のうてんき</option>
          <option>のんき</option>
          <option>ひかえめ</option>
          <option>おっとり</option>
          <option>うっかりや</option>
          <option>れいせい</option>
          <option>おだやか</option>
          <option>おとなしい</option>
          <option>しんちょう</option>
          <option>なまいき</option>
          <option>おくびょう</option>
          <option>せっかち</option>
          <option>ようき</option>
          <option>むじゃき</option>
        </select>

        <label className="label ml-4 mt-4">
          <span className="label-text text-gray-600">努力値</span>
        </label>

        <div className="flex justify-center">
          <div className="relative">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">HP</label>
          </div>
          <div className="relative ml-4">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">攻撃</label>
          </div>
          <div className="relative ml-4">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">防御</label>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="relative">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">特攻</label>
          </div>
          <div className="relative ml-4">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">特防</label>
          </div>
          <div className="relative ml-4">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">素早さ</label>
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
              placeholder="選択してください"
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
              placeholder="選択してください"
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
              placeholder="選択してください"
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
              placeholder="選択してください"
            />
          </div>
        </div>

        <div className="form-control ml-4 mr-4 mt-4">
          <label className="label">
            <span className="label-text text-gray-600">概要</span>
          </label>
          <textarea className="textarea textarea-bordered h-60" placeholder="おくびょう最速、とくこう252振りで、より多くの相手に上から負荷をかける運用をします。"></textarea>
        </div>

        <div className="flex flex-row-reverse mt-4 mr-4">
          <button className="btn btn-active btn-primary text-gray-200">投稿</button>
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

    </>
  )
}

export default NewPost