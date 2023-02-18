import React from 'react'
import Attacker from './Attacker'
import './Calculator.css'
import Defender from './Defender'
import Environment from './Environment'

const Calculator = () => {
  return (
    <>
      <div className='md:flex'>
        <Attacker />
        <Defender />
      </div>
        <Environment />
    </>
  )
}

export default Calculator