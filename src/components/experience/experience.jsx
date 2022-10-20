import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id ='experience'>
      <h5>What Skills I have</h5>
      <h2>MyExpeiences</h2>

      <div className="container experience__container">
        <div className="experience__pentest">
        <h3> Web Pentest</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Network and application security</h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Python Scripting </h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Linux </h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Security tools </h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Cryptography </h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Remote access technologies </h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate </small>
            </article>
            
          </div>

        </div>
        <div className="experience__blockchain">
          <h3> Blockchain Developpement</h3>
          <div className="experience__content">
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Solidity</h4>
              </div> 
              
              <small xlassName="text-light"> Intermidiate</small>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>Smart Contracts</h4>
              </div> 
              
              <small xlassName="text-light"> Entry Level</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/>
              <div>
                <h4>IPFS</h4>
              </div> 
              
              <small xlassName="text-light"> Entry Level</small>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icons'/> 
              <div>
                <h4>React JS</h4>
              </div>
              <small xlassName="text-light"> Intermidiate</small>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience