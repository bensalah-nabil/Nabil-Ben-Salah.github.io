import React from 'react'
import'./services.css'
import {BiCheck} from 'react-icons/bi'


const services = () => {
  return (
    <section id ='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}


        <article className='service'>
          <div className='service__head'>
            <h3>Web Pentest</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

          </ul>
        </article>
        {/* END OF WEB PENTEST */}

        <article className='service'>
          <div className='service__head'>
            <h3>Blockchain Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p> lorem ipsum dolor sit amet </p>
            </li>

            

            

          </ul>
        </article>
        {/* END OF BLOCKCHAIN DEVELOPMENT */}
      </div>








    </section>
  )
}

export default services