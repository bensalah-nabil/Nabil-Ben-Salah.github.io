import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
const HeaderSocilas = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin></BsLinkedin></a>
        <a href="https://github.com" target="_blank"><FaGithub></FaGithub></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter></BsTwitter></a>
    </div>
  )
}

export default HeaderSocilas