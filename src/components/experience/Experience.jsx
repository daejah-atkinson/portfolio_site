import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsFillPatchCheckFill/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill/> 
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill/>
                <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Experienced</small>
                  </div> 
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill/> 
                <div>
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill/> 
                <div>
                  <h4>JQuery</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill/> 
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Basic</small>
                </div>
              </article>
            </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>Express</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>Python</h4>
                  <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>Django</h4>
                  <small className='text-light'>Basic</small>
                </article>
                <article className='experience__details'>
                  <BsFillPatchCheckFill/> 
                  <h4>SQL</h4>
                  <small className='text-light'>Basic</small>
                </article>
              </div>
        </div>
      </div>

    </section>
  )
}

export default Experience