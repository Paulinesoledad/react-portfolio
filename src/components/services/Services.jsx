import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

         <article className="service">
            <div className="service__head">
                <h3>Skill Strengths</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon ' />
                <p>Communication & Interpersonal</p>
              </li>

              <li>
                <BiCheck className='service__list-icon ' />
                <p>Planning & Time Management</p>
              </li>

              <li>
                <BiCheck className='service__list-icon ' />
                <p>Analytical & Problem solving</p>
              </li>

            </ul>
         </article>
         {/* END OF USEFUL SKILLS */}

         <article className="service">
            <div className="service__head">
                <h3>Languages & Frameworks</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon ' />
                <p>HTML & CSS</p>
              </li>

              <li>
                <BiCheck className='service__list-icon ' />
                <p>Bootstrap</p>
              </li>

              <li>
                <BiCheck className='service__list-icon ' />
                <p>Javascript</p>
              </li>

            </ul>
         </article>
         {/* END OF CONTENT CREATION  */}

      </div>
    </section>
  )
};

export default Services;
