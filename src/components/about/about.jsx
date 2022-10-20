import React from 'react'
import './about.css'
import ME from '../../assets/about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id ='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Awards</h5>
              <small>Hacker Rank on Hack The Box</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Complteted</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint totam nobis culpa. Ab alias modi delectus reprehenderit impedit eaque laborum quia qui. Excepturi magni numquam officiis enim sint, consequatur delectus!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>

    </section>
  )
}


export default About