import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
          <div className="about__me">
            <img src={ME} alt="About" />

          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>General Assembly Bootcamp Graduate</small>
              </article>
              <article className='about__card'>
                <AiOutlineFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>4+ Completed</small>
              </article>
            </div>

            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at tenetur hic ut laudantium ad mollitia architecto sit facilis officiis voluptatibus? Fuga quaerat ab, explicabo ea repellat earum velit voluptatum.
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
            
          </div>
      </div>
    </section>
  )
}

export default About