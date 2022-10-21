import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'


const footer = () => {
  return(
    <footer> 
      <a href='#' className='footer__logo'>Nabil Ben Salah</a>
      <ul className='permalinks'>
        <li> <a href='#'>Home</a></li>
        <li> <a href='#about'>About</a></li>
        <li> <a href='#Experience'>Experience</a></li>
        <li> <a href='#Services'>Services</a></li>
        <li> <a href='#Portfolio'>Portfolio</a></li>
        <li> <a href='#Contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/nabil-ben-salah/' target='_blank'><AiFillLinkedin/></a>
        <a href='https://github.com/bensalah-nabil' target='_blank'><BsGithub/></a>
        <a href='https://www.facebook.com/Nabil30345/' target='_blank'><FaFacebookF/></a>
        <a href='https://twitter.com/NabilBe27242883/' target='_blank'><BsTwitter/></a>      
      </div>
      <div className='footer__copyright'>
        <small>&copy; 2022 Nabil Ben Salah. All rights reserved.</small>
      </div>
    </footer>
  )
}


export default footer