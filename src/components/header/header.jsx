import React from 'react'
import './header.css'
import CTA from './CTA'
import HER from '../../assets/her.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>ISAAC MOBE</h1>
        <h5 className="text-light">Fullstack Intermediate Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={HER} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header