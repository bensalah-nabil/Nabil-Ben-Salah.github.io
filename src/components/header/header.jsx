import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocilas from './HeaderSocilas'

const header = () => {
  return(
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nabil Ben Salah</h1>
        <h5 className="text-light">Blockchain Developer</h5>
        <CTA />  
        <HeaderSocilas />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contract" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default header