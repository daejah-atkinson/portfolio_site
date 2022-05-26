import React from 'react'
import './portfolio.css'
import Project1 from '../../assets/project1mockup.png'
import Project2 from '../../assets/project2mockup.png'
import Project3 from '../../assets/project3mockup.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className=" container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project1} alt='Project One'/>
          </div>
            <h3>2048 Browser Game</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/daejah-atkinson/2048-Browser-Game' className='btn' target='_blank'>Github</a>
              <a href='https://two048-browser-game.onrender.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project2} alt='Project Two'/>
          </div>
            <h3>IMDb Reverse Engineered Site</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/daejah-atkinson/IMDb-Project-2' className='btn' target='_blank'>Github</a>
              <a href='https://imdb-project2.herokuapp.com/movies' className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Project3} alt='Project Three'/>
          </div>
            <h3>Pack Hacker</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/daejah-atkinson/Project-3-Pack-Hacker' className='btn' target='_blank'>Github</a>
              <a href='https://pack-hacker.netlify.app/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio