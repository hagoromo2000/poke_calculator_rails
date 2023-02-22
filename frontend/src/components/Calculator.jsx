import React, { useState, useEffect } from 'react'
import Attacker from './Attacker'
import './Calculator.css'
import Defender from './Defender'
import Environment from './Environment'
import Footer from './Footer'



const Calculator = () => {
  const [attack, setAttack] = useState(100)
  const [specialAttack, setSpecialAttack] = useState(100)
  const [power, setPower] = useState(0)
  const [damageClass, setDamageClass] = useState('ぶつり')

  const [hp, setHp] =useState(100)
  const [defense, setDefense] = useState(100)
  const [specialDefense, setSpecialDefense] = useState(100)

  const [damage, setDamage] = useState(0)

  useEffect(() => {
    setDamage(() => {
      if(damageClass === "ぶつり"){
        return 22 * power * attack / defense / 50 + 2
      }else{
        return 22 * power * specialAttack / defense / 50 + 2
      }

    })
  },[attack, power, defense])

  return (
    <>
      <div className='md:flex'>
        <Attacker setAttack={setAttack} setSpecialAttack={setSpecialAttack} setPower={setPower} setDamageClass={setDamageClass} power={power} attack={attack} specialAttack={specialAttack}  />
        <Defender setHp={setHp} setDefense={setDefense} />
      </div>
      <div className='h-64 bg-blue-100'>
        <Environment />
      </div>
      <Footer damage={damage} hp={hp}/>
    </>
  )
}

export default Calculator