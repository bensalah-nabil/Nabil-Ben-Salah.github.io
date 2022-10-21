import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio3.jpg'



const data = [
  {
    id : 1,
    image: IMG1,
    title: 'Supermarket Management System',
    github:'https://github.com/bensalah-nabil/Product-cash-Management',
    demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-Financial-data-visualization'
  },
  {
    id : 2,
    image: IMG1,
    title: 'Tool',
    github:'https://github.com/bensalah-nabil/',
    demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-Financial-data-visualization'
  },
  {
    id : 2,
    image: IMG1,
    title: 'Tool',
    github:'https://github.com/bensalah-nabil/',
    demo:'https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-Financial-data-visualization'
  }
]

const portfolio = () => {
  return (
    <section id ='portfolio'>
      <h5>A selection of my best projects</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">

                <img src={image} alt={title} />
                <h3>{title}</h3>

                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo } className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>

              </div>

          </article>
            )})
        }
      </div>
    </section>
  )
     
} 

export default portfolio