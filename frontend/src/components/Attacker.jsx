import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import './Calculator.css'
import Pokemons from '../json/all_pokemons.json'
import Moves from '../json/all_moves.json'
import Items from '../json/all_items.json'
import Abilities from '../json/all_abilities.json'

const attack_moves = Moves.filter(move => move.power !== null)

const all_moves = attack_moves.map(data => {
  return { value: data, label: data.name }
})

const all_pokemons = Pokemons.map(data => {
  return { value: data.name, label: data.name }
})

const all_items = Items.map(data => {
  return { value: data.name, label: data.name }
})

const all_abilities = Abilities.map(data => {
  return { value: data.name, label: data.name }
})

const Attacker = (props) => {

  const [pokemon, setPokemon] = useState(null);
  const handlePokemon = (pokemon) => {
    setPokemon(pokemon);
  };

  const [item, setItem] = useState(null);
  const handleItem = (item) => {
    setItem(item);
  };

  const [ability, setAbility] = useState(null)
  const handleAbility = ability => {
    setAbility(ability);
  };

  const [move, setMove] = useState({value: {"name":"はたく","type":"ノーマル","power":40,"damage_class":"ぶつり"}});
  const handleMove = (move) => {
    setMove(move);
    handlePower(move);
  };

  const handleAttack = (event) => {
    props.setAttack(event.target.value)
  }

  const handlePower = (move) => {
    props.setPower(move.value.power)
    console.log(move.value.power)
  }
  

  return (
    <>
      <div className="artboard phone-5 bg-white rounded-lg shadow-xl mx-auto mt-10 ">
        <div className="flex flex-row bg-gradient-to-r from-red-200 to-red-500" >
          <p className="pt-5 pl-5 font-bold " >攻撃側</p>
          <button className="btn brn-primary ml-32 mt-2 mb-2">育成論から呼び出す</button>
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

          <img src="/tera-icon.png" className="mt-auto mb-auto ml-4 w-10 h-10 cursor-pointer" alt="terastal" />
        </div>

        <div className="flex mt-5">
          {/* 攻撃実数値 */}
          <div className="relative">
            <input type="number" onChange={handleAttack} id="attack_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5  ml-4 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_floating_filled" className="ml-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">実数値</label>
          </div>

          {/* 攻撃努力値 */}
          <div className="relative ml-4">
            <input type="number" id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">努力値</label>
          </div>

          {/* 性格補正 */}
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

          <div className="relative ml-4">
            <input type="number" onChange={handlePower} value={move.value.power} id="attack_ev_floating_filled" className="block rounded-t-lg px-1 pb-2.5 pt-5 w-20 text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
            <label htmlfor="attack_ev_floating_filled" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">威力</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default Attacker