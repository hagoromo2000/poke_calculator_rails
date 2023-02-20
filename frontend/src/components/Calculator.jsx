import React from 'react'
import Attacker from './Attacker'
import './Calculator.css'
import Defender from './Defender'
import Environment from './Environment'
import Footer from './Footer'

const Calculator = () => {
  return (
    <>
      <div className='md:flex'>
        <Attacker />
        <Defender />
      </div>
      <Environment />
      <Footer />
    </>
  )
}

export default Calculator