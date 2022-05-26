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

            <p> Hello! My name is Daejah Atkinson, I'm based in Charlotte, North Carolina. I graduated with a Bachelor of Science in Exercise Science from the University of North Carolina at Charlotte and have worked in healthcare for over seven years. Recently I decided to pursue a career in technology and attended General Assembly's Software Engineering Immersive Program where I learned fullstack development in the industry's most in-demand technologies. If you're looking for a highly motivated individual to join your team please reach out. 
            </p>

            <a href='#contact' className='btn btn-primary'>Contact Me</a>
            
          </div>
      </div>
    </section>
  )
}

export default About