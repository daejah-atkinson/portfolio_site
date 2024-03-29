import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
       <div className="container header__container">
           <h4>Hello I'm</h4>
           <h1>Daejah Atkinson</h1>
           <h4 className="light">A Full Stack Web Developer</h4>
           <CTA/>
           <HeaderSocials/>
            <div className="me">
                <img src={ME} alt=''/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
       </div>
    </header>
  )
}

export default Header