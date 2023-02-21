import React, { useState, useEffect } from 'react'
import Attacker from './Attacker'
import './Calculator.css'
import Defender from './Defender'
import Environment from './Environment'
import Footer from './Footer'



const Calculator = () => {
  const [attack, setAttack] = useState(100)
  const [power, setPower] = useState(0)

  const [hp, setHp] =useState(100)
  const [defense, setDefense] = useState(100)

  const [damage, setDamage] = useState(0)

  useEffect(() => {
    setDamage(() => {
      return 22 * power * attack / defense / 50 + 2
    })
  },[attack, power, defense])

  return (
    <>
      <div className='md:flex'>
        <Attacker setAttack={setAttack} setPower={setPower} power={power} />
        <Defender setHp={setHp} setDefense={setDefense} />
      </div>
      <Environment />
      <Footer damage={damage} hp={hp}/>
    </>
  )
}

export default Calculator