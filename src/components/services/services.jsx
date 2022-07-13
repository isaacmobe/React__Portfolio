import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
          <article className="service">
            <div className="service__head">
              <h3>UI/UX Design</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </article>
          {/*END OF UI/UX */}
          <article className="service">
            <div className="service__head">
              <h3>Web App Development</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </article>
          {/*END OF WEB DEVELOPMENT */}
          <article className="service">
            <div className="service__head">
              <h3>Content Creation</h3>
            </div>
            <ul className='service__list'>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
              <li>
                <BsCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit.</p>
              </li>
            </ul>
          </article>
          {/*END OF CONTENT CREATION*/}
      </div> 
    </section >
  )
}

export default services